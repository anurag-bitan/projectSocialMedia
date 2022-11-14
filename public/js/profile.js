$(document).ready(()=>{
    if(selectedTab == "replies"){
        loadReplies();
    }
    else{
        loadPosts();
    }
});

function loadReplies(){
        $.get("/api/posts",{ postedBy : profileUserId, isReply :true }, results =>{
        outputPosts(results, $(".postsContainer"));
    })
}
function loadPosts(){

    $.get("/api/posts",{ postedBy : profileUserId, pinned :true }, results =>{
        outputPinnedPost(results, $(".pinnedPostContainer"));
    })

    $.get("/api/posts",{ postedBy : profileUserId, isReply :false }, results =>{
        outputPosts(results, $(".postsContainer"));
    })
}

function outputPinnedPost(results, container) {

    if(results.length == 0){
        container.hide();
        return;
    }
    container.html("");
    
    results.forEach(result => {
        var html = createPostHtml(result)
        container.append(html);
    });

    if (results.length == 0) {
        container.append("<span class='noResults'>Nothing to show.</span>")
    }
}