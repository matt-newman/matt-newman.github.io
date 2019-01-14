pipeline {
  agent any
  stages {
    stage('download/install') {
      steps {
        sh 'npm install'
      }
    }
    stage('build') {
      steps {
        sh 'grunt'
      }
    }
  }
}