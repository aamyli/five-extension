const searchFrom = document.querySelector('.search');
        const input = document.querySelector('.in');
        const newsList = document.querySelector('.news-list');
        const apiKey = 'Q4mbe5TMGgWbz38qGe3lh89xJtEh8pkj';
        const index = Math.floor(Math.random() * 10) + 0;
    
        function firstArticle() {
                let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=trade&api-key=${apiKey}`;
                let topic = "FAIR TRADE";
                createArticle(url, topic);
            }
    
        function secondArticle() {
            let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=economy&api-key=${apiKey}`
            let topic = "ECONOMIC GROWTH";
            createArticle(url, topic);
        }
    
        function thirdArticle() {
            let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sustainability&api-key=${apiKey}`
            let topic = "INNOVATION";
            createArticle(url, topic);
        }
    
        function fourthArticle() {
            let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=infrastructure&api-key=${apiKey}`
            let topic = "SUSTAINABILITY";
            createArticle(url, topic);
        }
    
        function fifthArticle() {
            let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=innovation&api-key=${apiKey}`
            let topic = "INFRASTRUCTURE";
            createArticle(url, topic);
        }
        function createArticle(url, topic) {
            newsList.innerHTML = ''
            fetch(url).then((res) => {
                return res.json()
            }).then((data) => {
                // to trouble shoot: use console.log and click inspect in the browser and go to console to see the output
                // this shows all the data (open it up to see all the information)
                console.log(data);
                // each article is within the docs array (data.response.docs)
                // an example is the line right below this one, showing the headline
                console.log(data.response.docs[index].headline);
        
                // for each of the 10 elements in the array, a list item is created
                let div = document.createElement('div');
                
                div.style.backgroundColor = "rgba(0,0,0,0.7)";
                div.style.borderRadius = "10px";
                div.style.color="white";
                div.style.maxWidth="60%";
                div.style.margin="auto";
                div.style.marginTop="4vh";
                div.style.padding="50px";
                div.style.fontFamily="Lato, sans-serif";
    
                let h3 = document.createElement("h3");
                let h1 = document.createElement('h1');
                let h2 = document.createElement('h2');
                let a = document.createElement('a');
                let p = document.createElement('p');
    
                h3.textContent = topic;
                h3.style.color = "rgb(158, 219, 255)";
                div.appendChild(h3);
                // sets the list content to the headline.main (check inspect > console to find it)
                h1.textContent = data.response.docs[index].headline.main;
    
                // adds the "h1" to each list element
                div.appendChild(h1);
    
                // uses the <h2> element to display the date
                var date = data.response.docs[index].pub_date;
                h2.textContent = date.substring(0, 10); // ** SHOULD FIGURE OUT WAY TO CONVERT THIS TO A BETTER FORMAT
                h2.style.fontSize = "15px";
                h2.style.color = "rgb(175, 175, 175)";
                div.appendChild(h2);
                
                // the approach above can be implemented to add any piece of info to the list item (date, subtitle, etc.) for example: 
    
                // uses the <p> element to add the abstract for each article as well. 
                p.textContent = data.response.docs[index].abstract; 
                p.style.fontSize = "18px";
                div.appendChild(p);
    
    
    
                a.setAttribute('href', data.response.docs[index].web_url);
                a.setAttribute('target', '_blank');
                a.textContent = "READ NOW";
                a.style.backgroundColor = "rgb(158, 219, 255)";
                a.style.borderRadius = "10px";
                a.style.padding = "10px";
                a.style.marginLeft = "auto";
                a.style.marginRight = "0";
                div.appendChild(a);
    
                // adds each list element to the overall list (ul)
                newsList.appendChild(div);
            })
        }