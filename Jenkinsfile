pipeline {
    agent any

    stages {
        stage('Build Backend') {
            steps {
                dir('backend') {
                    // Build Spring Boot project
                    bat 'mvn clean install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    // Install and build frontend (only if you have a frontend)
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Docker Build & Run') {
            steps {
                // Build Docker image
                bat 'docker build -t home-tutor-app .'
                // Run Docker container
                bat 'docker run -d -p 8080:8080 home-tutor-app'
            }
        }
    }
}
