pipeline {
    agent any

    environment {
        CONTAINER_NAME = 'portfolio-app'
        IMAGE_NAME = 'portfolio-nextjs'
        IMAGE_TAG = "${BUILD_NUMBER}"
        HOST_PORT = '3000'
    }

    triggers {
        // GitHub webhook trigger
        GenericTrigger(
            genericVariables: [
                [key: 'ref', value: '$.ref']
            ],
            causeString: 'Triggered by GitHub push to $ref',
            token: 'portfolio-deploy',
            printContributedVariables: false,
            printPostContent: false,
            regexpFilterText: '$ref',
            regexpFilterExpression: 'refs/heads/main'
        )
    }

    options {
        timeout(time: 15, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '5'))
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Image') {
            steps {
                sh '''
                    docker build -t ${IMAGE_NAME}:${IMAGE_TAG} -t ${IMAGE_NAME}:latest .
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    # Stop and remove old container
                    docker stop ${CONTAINER_NAME} 2>/dev/null || true
                    docker rm ${CONTAINER_NAME} 2>/dev/null || true

                    # Run new container
                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        --restart unless-stopped \
                        -p ${HOST_PORT}:80 \
                        ${IMAGE_NAME}:${IMAGE_TAG}
                '''
            }
        }

        stage('Health Check') {
            steps {
                sh '''
                    sleep 5
                    for i in 1 2 3 4 5; do
                        if curl -sf http://localhost:${HOST_PORT}/health; then
                            echo "Health check passed"
                            exit 0
                        fi
                        sleep 2
                    done
                    echo "Health check failed"
                    docker logs ${CONTAINER_NAME}
                    exit 1
                '''
            }
        }

        stage('Cleanup') {
            steps {
                sh '''
                    # Remove dangling images
                    docker image prune -f

                    # Keep only last 3 tagged versions
                    docker images ${IMAGE_NAME} --format "{{.Tag}}" | \
                        grep -E "^[0-9]+$" | sort -rn | tail -n +4 | \
                        xargs -I {} docker rmi ${IMAGE_NAME}:{} 2>/dev/null || true
                '''
            }
        }
    }

    post {
        success {
            echo "Deployed successfully at http://localhost:${HOST_PORT}"
        }
        failure {
            echo 'Deployment failed'
            sh '''
                # Attempt rollback
                PREV=$((${BUILD_NUMBER} - 1))
                if docker image inspect ${IMAGE_NAME}:${PREV} > /dev/null 2>&1; then
                    docker stop ${CONTAINER_NAME} 2>/dev/null || true
                    docker rm ${CONTAINER_NAME} 2>/dev/null || true
                    docker run -d --name ${CONTAINER_NAME} --restart unless-stopped \
                        -p ${HOST_PORT}:80 ${IMAGE_NAME}:${PREV}
                    echo "Rolled back to version ${PREV}"
                fi
            '''
        }
        always {
            cleanWs()
        }
    }
}
