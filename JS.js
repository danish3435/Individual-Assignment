function updateGreeting() {
            const now = new Date();
            const hours = now.getHours();
            let msg = "";

            if (hours < 12) msg = "Good Morning!";
            else if (hours < 18) msg = "Good Afternoon!";
            else msg = "Good Evening!";

            document.getElementById('greeting').innerText = msg + " Welcome to My Website";
        }
        const textArray = ["Hi! I'm Muhammad Danish.", "I am a student at UiTM Cawangan Kedah.", "Welcome to my digital portfolio!"];
        let i = 0;
        let j = 0;
        let currentText = "";
        let isDeleting = false;

        function type() {
            const typewriterElement = document.getElementById('typewriter-text');
            const fullText = textArray[i];

            if (isDeleting) {
                currentText = fullText.substring(0, j - 1);
                j--;
            } else {
                currentText = fullText.substring(0, j + 1);
                j++;
            }

            typewriterElement.innerHTML = currentText + '<span class="cursor">|</span>';

            if (!isDeleting && j === fullText.length) {
                setTimeout(() => isDeleting = true, 2000); 
            } else if (isDeleting && j === 0) {
                isDeleting = false;
                i = (i + 1) % textArray.length; 
            }

            const speed = isDeleting ? 50 : 100;
            setTimeout(type, speed);
        }
        window.onload = () => {
            updateGreeting();
            type();
        };
		
		function sendLove(button) {
            const countSpan = button.querySelector('.count');
            let currentCount = parseInt(countSpan.innerText);
            
            currentCount++;
            countSpan.innerText = currentCount;

            button.style.transform = "scale(1.2)";
            setTimeout(() => {
                button.style.transform = "scale(1)";
            }, 200);

            if (currentCount === 10) {
                alert("That's a lot of love for the family! ❤️");
            }
        }
		
		function toggleTheme() {
            const body = document.body;
            body.classList.toggle('dark-theme');
        }

        const facts = [
            "I prefer doing house chores to relax! 🏠",
            "Hiking is my favorite way to recharge. ⛰️",
            "I chose 'DJ' because it's short and easy to remember! 🎧",
            "I am currently mastering HTML, CSS, and JS! 💻",
            "I believe literature is the best window to the world. 📚"
        ];

        function generateFact() {
            const factDisplay = document.getElementById('fact-text');
            const randomIndex = Math.floor(Math.random() * facts.length);
            factDisplay.style.opacity = 0; 
            
            setTimeout(() => {
                factDisplay.innerText = facts[randomIndex];
                factDisplay.style.opacity = 1; 
            }, 300);
        }
        function highlightBox(element) {
       
            document.querySelectorAll('.content-box').forEach(box => {
                box.style.borderColor = "#eee";
            });
           
            element.style.borderColor = "#3498db";
        }
		
		const form = document.getElementById('contactForm');
        const popup = document.getElementById('successPopup');

        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevents the page from refreshing
            popup.style.display = 'flex'; // Shows the popup
            form.reset(); // Clears the inputs
        });

        function closePopup() {
            popup.style.display = 'none'; // Hides the popup
        }
		
		function searchTable() {
            let input = document.getElementById("eduSearch");
            let filter = input.value.toUpperCase();
            let table = document.getElementById("eduTable");
            let tr = table.getElementsByTagName("tr");

            for (let i = 1; i < tr.length; i++) {
                let tdInstitution = tr[i].getElementsByTagName("td")[1];
                let tdYear = tr[i].getElementsByTagName("td")[0];
                if (tdInstitution || tdYear) {
                    let textValue = (tdInstitution.textContent || tdInstitution.innerText) + 
                                    (tdYear.textContent || tdYear.innerText);
                    if (textValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }

        // 2. Click-to-Highlight Feature
        function highlightRow(row) {
            // Remove highlight from all other rows
            let rows = document.querySelectorAll("#eduTable tr");
            rows.forEach(r => r.classList.remove("active-row"));
            
            // Add highlight to clicked row
            row.classList.add("active-row");
        }
		
		 function filterSelection(category) {
            const cards = document.querySelectorAll('.exp-card');
            const buttons = document.querySelectorAll('.filter-btn');
            
            // Handle active button state
            buttons.forEach(btn => {
                btn.classList.remove('active');
                if(btn.innerText.toLowerCase().includes(category) || (category === 'all' && btn.innerText === 'Show All')) {
                    btn.classList.add('active');
                }
            });

            // Handle filtering logic
            cards.forEach(card => {
                if (category === 'all') {
                    card.style.display = 'flex';
                } else if (card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }
		
		function animateBars() {
        const bars = document.querySelectorAll('.progress');
        bars.forEach(bar => {
            const percentage = bar.getAttribute('data-width');
            bar.style.width = percentage;
            bar.innerText = percentage;
        });
    }

    function resetBars() {
        const bars = document.querySelectorAll('.progress');
        bars.forEach(bar => {
            bar.style.width = '0%';
            bar.innerText = '0%';
        });
        // Small delay to allow the bars to reset before rising again
        setTimeout(animateBars, 100);
    }

    // Run animation once when the page loads
    window.onload = animateBars;
	
	