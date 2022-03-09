const $container_tweets = document.querySelector('#tweets-container');
// content, user.bio, user.id, user.name user.username:

function criarTweet(content, user, username){
    return `<div class="tweet">
        <div class="content">
            <div class="tweet-header">
                <a class="screen-name-link" href="/Diogo_a_Lendia">
                <strong>${user}</strong>
                <span class="username">@${username}</span>
                </a>
                <small class="time username">
                <span>9 hours ago</span>
                </small>
            </div>
            <div class="tweet-body">
                <p class="tweet-text">
                ${content}
                </p>
            </div>
        
        <div class="footer-actions" aria-label="Tweet actions">
            <div class="footer-action comment">
            <button class="action-button action-comment" type="button">
                <div class="icon-container" title="Comment">
                <span class="icon far fa-comment"></span>
                </div>
                <span class="action-count">
                <span class="action-value">310</span>
                </span>
            </button>
            </div>

            <div class="footer-action reply">
            <button class="action-button action-retweet" type="button">
                <div class="icon-container" title="Retweet">
                <span class="icon fas fa-retweet"></span>
                </div>
                <span class="action-count">
                <span class="action-value">925</span>
                </span>
            </button>
            </div>
            <div class="footer-action like">
            <button class="action-button action-like" type="button">
                <div class="icon-container" title="Like">
                <span class="icon far fa-heart"></span>
                </div>
                <span class="action-count">
                <span class="action-value">6.1K</span>
                </span>
            </button>
            </div>
        </div>
        </div>
    </div>`
}

let myRequest = new XMLHttpRequest();
myRequest.open("GET","https://621554e4c9c6ebd3ce2560b2.mockapi.io/api/v1/tweets", true);
myRequest.send()
myRequest.onreadystatechange = (item) => {
    if(myRequest.readyState == 4){
        let _json = JSON.parse(myRequest.response)
     
        _json.forEach(tweet => {
            console.log(tweet)

            $container_tweets.innerHTML += criarTweet( 
                tweet.content, 
                tweet.user.name, 
                tweet.user.username
            );
        });

    }
}

// CREATE TWEET
const btn_createTweet = document.querySelector('#create-tweet');
btn_createTweet.addEventListener('click', e => {
    document.querySelector('message-text').value
})