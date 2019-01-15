pipeline {
  agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
  }
  stages {
    stage('download/install') {
      steps {
        sh 'npm install'
      }
    }
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}