  pipeline {
        agent any
        stage('Pull code from github') {
            git branch: 'master',
            url: 'https://github.com/kadumuri1994/react-kafka-integration.git'
        }
        stage('Code Quality Check via SonarQube') {
            def scannerHome = tool 'sonarqube-scanner';
            withSonarQubeEnv("sonarqube-container") {
                sh """
                    ${scannerHome}/bin/sonar-scanner \
                    -Dproject.settings=./sonar-project.properties
                """
            }
        }
  } 