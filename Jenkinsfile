@Library('my-shared-library') _  // Import the shared library

pipeline {
    agent any  // You can specify the agent based on your requirements

    environment {
        MY_ENV_VAR = 'value'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm  // Checkout the source code
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Using shared library function to install dependencies
                    installDependencies()
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Using shared library function to build the project
                    buildProject()
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Using shared library function to run tests
                    runTests()
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Using shared library function to deploy the project
                    deployProject()
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
