pipeline {
  agent {
    node {
      label 'node -v'
    }

  }
  stages {
    stage('error') {
      steps {
        node(label: 'node  run build')
      }
    }

  }
}