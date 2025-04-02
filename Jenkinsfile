pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/PazAutumn/desafio_m8.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t task-api .'
            }
        }
    }
}