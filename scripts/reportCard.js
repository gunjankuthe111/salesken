const data = [
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What does the Prt Sc button do?",
            "correct_answer": "Captures what&#039;s on the screen and copies it to your clipboard",
            "incorrect_answers": [
                "Nothing",
                "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos",
                "Closes all windows"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the code name for the mobile operating system Android 7.0?",
            "correct_answer": "Nougat",
            "incorrect_answers": [
                "Ice Cream Sandwich",
                "Jelly Bean",
                "Marshmallow"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the domain name for the country Tuvalu?",
            "correct_answer": ".tv",
            "incorrect_answers": [
                ".tu",
                ".tt",
                ".tl"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "How many kilobytes in one gigabyte (in decimal)?",
            "correct_answer": "1000000",
            "incorrect_answers": [
                "1024",
                "1000",
                "1048576"
            ]
        },
    ]

    const questions = document.getElementById("questions");
   data.forEach((ele,i)=>{
        const arr = [...ele.incorrect_answers,ele.correct_answer]
        arr.sort(() => Math.random() - 0.5);
        const div = document.createElement("div")
        const div1 = document.createElement("div")
        const p1 = document.createElement("p") 
        p1.innerText = "Question"
        const pA = document.createElement("p") 
        pA.innerText = i+1
        div1.append(p1,pA)
        const p2 = document.createElement("p") 
        p2.innerText = ele.question;
        const div2 = document.createElement("div")
        const divA = document.createElement("div")
        divA.innerHTML = arr[0]
        ele.correct_answer===arr[0]?divA.setAttribute("class","green"):""
        const divB = document.createElement("div")
        divB.innerHTML = arr[1]
        ele.correct_answer===arr[1]?divB.setAttribute("class","green"):""
        const divC = document.createElement("div")
        divC.innerHTML = arr[2]
        ele.correct_answer===arr[2]?divC.setAttribute("class","green"):""
        const divD = document.createElement("div")
        divD.innerHTML = arr[3]
        ele.correct_answer===arr[3]?divD.setAttribute("class","green"):""
        div2.append(divA,divB,divC,divD)
        div2.setAttribute('id','options')
        div.append(div1,p2,div2)
        questions.append(div)
   })