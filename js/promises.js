
// function getGitHubRepos() {
//     return fetch('https://api.github.com/users/jordan-felan/events')
//         .then(response => response.json()).then(data => {
//             // console.log(data[0].created_at);
//             $("#commit").html("Your last commit was: " + data[0].created_at)
//         })
//
// }

// getGitHubRepos()

const userLastCommit = username => {
    fetch(`https://api.github.com?users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_ACCESS_TOKEN}`}}).then(resp => resp.json())
        .then(data => {
        let lastPush
            for(let event of data) {
                if(event.type === "PushEvent") {
                    lastPush = new Date(event.created_at);
                    break;

                }
            }
            console.log(lastPush)
    });
};
userLastCommit("jordan-felan")




// function makeRequest() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve('Yay it worked!!! Here is your DATA!!');
//             } else {
//                 reject('Oh no!! Failed. PLease attempt to reload!');
//             }
//         }, 1500);
//     });
// }
//
// const request = makeRequest();
// console.log(request);
// request.then(message => console.log('Promise resolved!', message));
//
// request.catch(message => console.log('Promise rejected!', message));

const wait = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
};
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));