pipeline {
    agent any
    stages {
        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        stage('Docker Build & Run') {
            steps {
                sh 'docker-compose -f infra/docker-compose.yml up -d --build'
            }
        }
    }
}
