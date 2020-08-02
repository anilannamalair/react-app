  pipeline {
        agent any
        stages {
            stage('Pull code from github') {
                steps {
                    git branch: 'master',
                    url: 'https://github.com/kadumuri1994/react-kafka-integration.git'
                }
            }
            stage('Code Quality Check via SonarQube') {
                steps {
                    def scannerHome = tool 'sonarqube-scanner';
                    withSonarQubeEnv("sonarqube-container") {
                        sh """
                            ${scannerHome}/bin/sonar-scanner \
                            -Dproject.settings=./sonar-project.properties
                        """
                    }
                }
            }
        }
  } 