pipeline {
    agent any

    stages {
        stage('Quality Check') {
            environment {
                SCANNER_HOME = tool 'sonar-scanner'
                ORGANIZATION = "NID"
                PROJECT_NAME = "resident-service"
                }
            steps {
                withSonarQubeEnv('sonar-server') {
                    sh '''$SCANNER_HOME/bin/sonar-scanner -Dsonar.organization=$ORGANIZATION \
                    -Dsonar.projectName=$Project_Name \
                    -Dsonar.projectKey=$PROJECT_NAME \
                    -Dsonar.sources=./src'''
                }
            }
           
        }
    }
}