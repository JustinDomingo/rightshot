window.onload = function() {

    //DOM Elements
    let tryAgain = document.getElementById('try-again')
    let accuracyDOM = document.getElementById("accuracy")
    let scoreCount = document.getElementById("score")
    let timerCount = document.getElementById("timer")
    let dotOne = document.getElementById("dotOne")
    let dotTwo = document.getElementById("dotTwo")
    let targetDot = document.getElementById("dotThree")
    let initialScore = 0
    let hasStarted = false
    let hasCompleted = false
    let correctClicked = 0
    let totalClicked = 0
    let accuracy = 0

    //Events
    document.addEventListener("click", function(e) {
        miss(e)
    })

    dotOne.addEventListener("click", function() {
        if (!hasStarted) {
            timeOut()
            hasStarted = true
        }
        if (initialScore > 0) {
            initialScore -= 250
        }
        totalClicked += 1
        accuracyHandler()
      randomPlace(dotOne, dotTwo, targetDot)
      scoreUpdate(initialScore)
    })
    
    dotTwo.addEventListener("click", function() {
        if (!hasStarted) {
            timeOut()
            hasStarted = true
        }
        if (initialScore > 0) {
            initialScore -= 250
        }
        totalClicked += 1
        accuracyHandler()
      randomPlace(dotOne, dotTwo, targetDot)
      scoreUpdate(initialScore)
    })
    
    targetDot.addEventListener("click", function() {
        if (!hasStarted) {
            timeOut()
            hasStarted = true
        }
        totalClicked += 1
        correctClicked += 1
        accuracyHandler()
      initialScore += 500
      randomPlace(dotOne, dotTwo, targetDot)
      scoreUpdate(initialScore)
    })
    
    //Functions

    randomPlace(dotOne, dotTwo, targetDot)

    function timeOut() {
        let initialTime = 60
        let timeInterval = setInterval(function() {
            initialTime -= 1
            timerCount.innerHTML = `${initialTime}`
        }, 1000)
        setTimeout(function() {
            let score = initialScore
            clearInterval(timeInterval)
            dotOne.disabled = true
            dotTwo.disabled = true
            targetDot.disabled = true
            hasCompleted = true
            tryAgain.classList.remove("invisible")
          }, 60000)
    }

    function miss(e) {
        if (!e.target.classList.contains("buttons")) {
            if (!hasCompleted) {
                if (initialScore > 0) {
                    initialScore -= 250
                } 
                scoreUpdate(initialScore)
                totalClicked += 1
                accuracyHandler() 
            }
            
        }
    }

    function randomPlace(one, two, three) {
      function randomizer() {
        return Math.random() * 500
      }
      one.style.position = "absolute";
      one.style.left = `${randomizer()}px`
      one.style.top = `${randomizer()}px`
      two.style.position = "absolute";
      two.style.left = `${randomizer()}px`
      two.style.top = `${randomizer()}px`
      three.style.position = "absolute";
      three.style.left = `${randomizer()}px`
      three.style.top = `${randomizer()}px`
    }

    function scoreUpdate(score) {
        scoreCount.innerHTML = `${score}`
    }

    function accuracyHandler() {
       let decimal = correctClicked / totalClicked
       accuracy = Math.round(decimal * 100)
       accuracyDOM.innerHTML = `${accuracy}%`
    }
}

