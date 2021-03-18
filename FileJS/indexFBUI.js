<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>SocialAuth</title>
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> -->
    <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> -->
    <script src="https://www.googletagservices.com/activeview/js/current/osd.js?cb=%2Fr20100101"></script>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="https://www.rackpoint.co.uk/social/assets/img/1555498333.png">
    <!-- Title -->
    <title>Rackpoint | Posts</title>

    <!-- Set website url -->
    <meta name="url" content="https://www.rackpoint.co.uk/social/">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.2.0/css/all.css">

    <!-- Simple Line Icons -->
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css">

    <!-- Midrub CSS -->
    <link rel="stylesheet" type="text/css" href="https://www.rackpoint.co.uk/social/assets/base/user/themes/blue/styles/css/style.css?ver=0.0.8.1b6" media="all">

    <!-- Styles -->
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/fullcalendar.min.css?ver=0.0.8.1b6" type="text/css" media="all">
    <link rel="stylesheet" href="https://www.rackpoint.co.uk/social/assets/base/user/apps/collection/posts/js/emojionearea-master/dist/emojionearea.min.css" type="text/css" media="all">
    <link rel="stylesheet" href="https://www.rackpoint.co.uk/social/assets/base/user/apps/collection/posts/styles/css/posts.css?ver=0.0.9" type="text/css" media="all">

    <script src="https://pagead2.googlesyndication.com/pagead/js/r20200601/r20190131/show_ads_impl_fy2019.js" id="google_shimpl"></script>
    <script type="text/javascript" src="//www.dropbox.com/static/api/2/dropins.js" id="dropboxjs" data-app-key="52fyt18bt61s0q9"></script>
    <style type="text/css">
        @-webkit-keyframes rotate {
            from {
                -webkit-transform: rotate(0deg);
            }

            to {
                -webkit-transform: rotate(360deg);
            }
        }

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        .dropbox-dropin-btn,
        .dropbox-dropin-btn:link,
        .dropbox-dropin-btn:hover {
            display: inline-block;
            height: 14px;
            font-family: "Lucida Grande", "Segoe UI", "Tahoma", "Helvetica Neue", "Helvetica", sans-serif;
            font-size: 11px;
            font-weight: 600;
            color: #636363;
            text-decoration: none;
            padding: 1px 7px 5px 3px;
            border: 1px solid #ebebeb;
            border-radius: 2px;
            border-bottom-color: #d4d4d4;
            background: #fcfcfc;
            background: -moz-linear-gradient(top, #fcfcfc 0%, #f5f5f5 100%);
            background: -webkit-linear-gradient(top, #fcfcfc 0%, #f5f5f5 100%);
            background: linear-gradient(to bottom, #fcfcfc 0%, #f5f5f5 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fcfcfc', endColorstr='#f5f5f5', GradientType=0);
        }

        .dropbox-dropin-default:hover,
        .dropbox-dropin-error:hover {
            border-color: #dedede;
            border-bottom-color: #cacaca;
            background: #fdfdfd;
            background: -moz-linear-gradient(top, #fdfdfd 0%, #f5f5f5 100%);
            background: -webkit-linear-gradient(top, #fdfdfd 0%, #f5f5f5 100%);
            background: linear-gradient(to bottom, #fdfdfd 0%, #f5f5f5 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fdfdfd', endColorstr='#f5f5f5', GradientType=0);
        }

        .dropbox-dropin-default:active,
        .dropbox-dropin-error:active {
            border-color: #d1d1d1;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
        }

        .dropbox-dropin-btn .dropin-btn-status {
            display: inline-block;
            width: 15px;
            height: 14px;
            vertical-align: bottom;
            margin: 0 5px 0 2px;
            background: transparent url('https://www.dropbox.com/static/images/widgets/dbx-saver-status.png') no-repeat;
            position: relative;
            top: 2px;
        }

        .dropbox-dropin-default .dropin-btn-status {
            background-position: 0px 0px;
        }

        .dropbox-dropin-progress .dropin-btn-status {
            width: 18px;
            margin: 0 4px 0 0;
            background: url('https://www.dropbox.com/static/images/widgets/dbx-progress.png') no-repeat center center;
            -webkit-animation-name: rotate;
            -webkit-animation-duration: 1.7s;
            -webkit-animation-iteration-count: infinite;
            -webkit-animation-timing-function: linear;
            animation-name: rotate;
            animation-duration: 1.7s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }

        .dropbox-dropin-success .dropin-btn-status {
            background-position: -15px 0px;
        }

        .dropbox-dropin-disabled {
            background: #e0e0e0;
            border: 1px #dadada solid;
            border-bottom: 1px solid #ccc;
            box-shadow: none;
        }

        .dropbox-dropin-disabled .dropin-btn-status {
            background-position: -30px 0px;
        }

        .dropbox-dropin-error .dropin-btn-status {
            background-position: -45px 0px;
        }

        @media only screen and (-webkit-min-device-pixel-ratio: 1.4) {
            .dropbox-dropin-btn .dropin-btn-status {
                background-image: url('https://www.dropbox.com/static/images/widgets/dbx-saver-status-2x.png');
                background-size: 60px 14px;
                -webkit-background-size: 60px 14px;
            }

            .dropbox-dropin-progress .dropin-btn-status {
                background: url('https://www.dropbox.com/static/images/widgets/dbx-progress-2x.png') no-repeat center center;
                background-size: 20px 20px;
                -webkit-background-size: 20px 20px;
            }
        }

        .dropbox-saver:hover,
        .dropbox-chooser:hover {
            text-decoration: none;
            cursor: pointer;
        }

        .dropbox-chooser,
        .dropbox-dropin-btn {
            line-height: 11px !important;
            text-decoration: none !important;
            box-sizing: content-box !important;
            -webkit-box-sizing: content-box !important;
            -moz-box-sizing: content-box !important;
        }
    </style>
    <style media="screen">
        #fb-btn {
            margin-top: 20px;
        }

        #profile,
        #logout,
        #feed {
            display: none
        }
    </style>
</head>

<body>
    <script>
        let token;
        let tokenAll = `EAACttKh3UaABAGZARR1iqweN7hYp8XxYBB4fn9pNArQKHWPNZBWWsJLyOzDC1q0LB2VzA0x47bAWRQ3yAyBztGMDSRrs5P0tfPWde7n66AISOvpqFeBRJqxfEbC0nsoheZBAsRXlwzFnomYgi5bcbjpaUs4Rbi4uKBXbJsOxgZDZD`;
        let pageID = `102023534891891`;

        window.fbAsyncInit = function() {
            FB.init({
                appId: '190991432110496',
                cookie: true,
                xfbml: true,
                version: 'v7.0'
            });

            FB.AppEvents.logPageView();

        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));


        function statusChangeCallback(response) {
            if (response.status === 'connected') {
                console.log('Logged in and authenticated');
                token = response.authResponse.accessToken;
                console.warn('token', response);
                setElements(true);
                getLongLivedUserToken();
                // testAPI();
                //getLongLivedPageToken();
                //updatePost();
                //deletePost();
                // getPostCommentOfPost();
                // buildAll();
                // getLongLivedPageToken();

            } else {
                console.log('Not authenticated');
                setElements(false);
            }
        }

        function callFBLogin() {
            FB.login(function(response) {
                if (response.authResponse) {
                    statusChangeCallback(response);
                } else {
                    alert("Access not authorized.");
                }
            }, {
                scope: 'pages_read_engagement,pages_manage_posts,pages_read_user_content,pages_show_list'
            });
        }

       

        function checkLoginState() {
            FB.login(function(response) {
                console.log('Login to fb.login:', response)
                FB.getLoginStatus(function(response) {

                }); //scope
            }, {
                scope: 'pages_manage_posts, pages_read_engagement, pages_show_list'
            })
        }

        function logout() {
            FB.logout(function(response) {
                setElements(false);
            });
        }


        function testAPI() {
            // FB.api(
            //     "/{page-id}_{post-id}/",
            //     "POST",
            //     {
            //         "message": "This is a test value"
            //     },
            //     function (response) {
            //     if (response && !response.error) {
            //         /* handle the result */
            //     }
            //     }
            // );


            FB.api('/me?fields=name,email,birthday,location', function(response) {
                if (response && !response.error) {
                    console.log("profile", response);
                    // buildProfile(response);
                }

                FB.api('/me/feed', function(response) {
                    if (response && !response.error) {
                        console.log('post feed me', response);
                        // buildFeed(response);
                    }
                });

                FB.api('/554721628578292_368065580577232?fields=id,actions,description', function(response) {
                    if (response && !response.error) {
                        console.log('pageid_postid', response);
                        //buildFeed(response);
                    }
                });
                //page_id/feed
                FB.api('100644248350802/feed?method=get', function(response) {
                    if (response && !response.error) {
                        console.log('post in page', response);
                        //buildFeed(response);
                    }
                });
                //update page_postid
                // FB.api(`"100644248350802_100646925017201"?method=post&message=Test Edited.&access_token=EAACttKh3UaABAHRFBRdQoo1s1dw0aOuz6cyzCzrTySDN3IrfaVAOVGLcu1P4Qp9Q92bZAxSfjuIvXdQnivIfJnEboGB6oUhbKOUZA1PdTtZAhweHmoHGMy3cQOawXKRianKJtD2z87ZCizamnvhRtV0IwjbUJjSUTDew0yZA0FooZAyodwd2n0675pk2jjy7AZD`, function (response) {
                //   if (response && !response.error) {
                //     console.log('update page post id', response);
                //     //buildFeed(response);
                //   }
                // });
                //get account
                FB.api('me/accounts?fields=name,access_token', function(response) {
                    if (response && !response.error) {
                        console.log('get accounts', response);
                        for (let item in response.data) {
                            console.error('Page Token', response.data[item].access_token);
                            console.error('Name page', response.data[item].name);
                        }
                        //console.log("{{route('page.createpost')}}");
                        axios.post("{{route('page.createpost')}}", {
                                data: response.data
                            })
                            .then(res => {
                                console.log("data reponse", res);
                            }).catch(e => {
                                console.warn("errors reponse", e);
                            })
                        buildFeed(response);
                    }
                });

                //
            })
        }

        window.addEventListener('load', function() {
            //getLongLivedPageToken();
            //getInfoPage();
            //postVideo();
        })

        async function buildAll() {
            var a = await getPostCommentOfPost();
        }

        function updatePost(page_post_id) {
            let access_tokenDelete = 'EAACttKh3UaABAAz6lTFBwZC9U1305kaVsGE9fZCbPkBOBmateb2JiJ1xYnOUnhkASk3ZALTRpX8DZBYnJg0TzUv6rRLZCo0ZAe8b2rLdGZCfc0cdMfZBvhTUFI1AavPerWaIFjZCoAdnvZANdt7nV9DZBZCxvpH63PBRaJZC116YaoJKAIgZDZD';


            let imgMedia = [{
                "media_fbid": "111784317236795"
            }];
            let ob = {
                message: 'hey man 2',
                access_token: access_tokenDelete,
                attached_media: imgMedia,
            };
            FB.api(`https://graph.facebook.com/${page_post_id}`, 'post', ob, function(res) {
                console.log('Response FB.API delete post', res);
            })
        }
        //praph../version/page-post-id?medthod=delete&access_token={token-page}
        function deletePost(page_post_id) {
            var url = `https://graph.facebook.com/v7.0/${page_post_id}`;
            let access_tokenDelete = tokenAll;


            let ob = {

                access_token: access_tokenDelete,
                //attached_media:imgMedia,
            };
            FB.api(`https://graph.facebook.com/${page_post_id}`, 'delete', ob, function(res) {
                console.log('Response FB.API delete post', res);
            })
        }
        //https://graph.facebook.com/{page-post-id}/comments?access_token={page-access-token}
        async function getPostCommentOfPost() {
            var url = `https://graph.facebook.com/v7.0/100644248350802_100646925017201/comments`;
            axios.post(url, {
                access_token: token,
                method: 'get'
            }).then(res => {
                console.log('response get comment of post', res);
            }).catch(e => {
                console.log("errors", e);
            });
            return 1;
        }

        function buildProfile(user) {
            let profile = `
          <h3>${user.name}</h3>
          <ul class="list-group">
            <li class="list-group-item">User ID: ${user.id}</li>
            <li class="list-group-item">Email: ${user.email}</li>
            <li class="list-group-item">Birthday: ${user.birthday}</li>
          </ul>
        `;

            document.getElementById('profile').innerHTML = profile;
        }

        function buildFeed(feed) {
            let output = '<h3>Latest Posts</h3>';
            //console.log("data feed",feed.data );
            for (let i in feed.data) {


                output += `
              <div class="well">
                 <span>ID :${feed.data[i].id}  </br> Created_time :${feed.data[i]["created_time"]} </br> Story: ${feed.data[i].story || "no story"}  </span>
              </div>
            `;

            }

            document.getElementById('feed').innerHTML = output;
        }

        function getIdImage() {
            let access_token = tokenAll;
            let method = `POST`;

            let pageID = '100644248350802';
            let urlImg = [`https://pm1.narvii.com/6060/305688b3c808caf4f1e3751b63820b9385d6345e_hq.jpg`];
            for (let item in urlImg) {

                let ob = {
                    url: urlImg[item],
                    access_token: access_token,
                    published: false
                }
                FB.api(`https://graph.facebook.com/${pageID}/photos?caption=Demo description`, 'POST', ob, function(res) {
                    console.log('Response img FB.api', res);
                });
            }
        }

        async function contentPost(content) {
            // var url = `https://graph.facebook.com/{page_id}/feed`;
            let access_token = tokenAll;
            let method = `POST`;
            let message = content;
            //let pageID = this.pageID;
            let urlImg = [`https://www.seekpng.com/png/detail/817-8171022_ezreal-v-binh-tinh-t-ez-v-binh.png`];


            //let url = `https://graph.facebook.com/100644248350802/feed`;
            //let url = `https://graph.facebook.com/100644248350802/feed?method=${method}&message=${message}&link=${urlImg}&access_token=${access_token}`;
            let photos = [];
            //let imgAtt  = `attached_media=[{"media_fbid":"104125331336027"},{"media_fbid":"104149471333613"}]`;
            let imgAtt = [{
                "media_fbid": "104155827999644"
            }, {
                "media_fbid": "104155871332973"
            }];
            let imgMedia = [{
                "media_fbid": "116413176773909"
            }];
            //console.log(imgAtt);
            // let url = `https://graph.facebook.com/${pageID}/feed?method=${method}&message=${message}&access_token=${access_token}`;

            let ob = {
                message: content,
                access_token: access_token,
                // attached_media:imgMedia,
            };
            FB.api(`https://graph.facebook.com/${pageID}/feed`, 'post', ob, function(res) {
                console.log('Response FB.API', res);
            })

            // let data = await axios.post(url,{attached_media:imgAtt});

            // let page_post_id = data.data.id;
            // let array = page_post_id.split('_');
            // let post_id = array[1];

            // axios.post("{{route('page.createpost')}}",{
            //     page_post_id: page_post_id,
            //     content: content,
            //     post_id: post_id
            // }).then(res=>{
            //     console.log('post success');
            // });
            //add img

        }

        function postVideo() {
            let urlVideo = `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`;


            let ob = {
                access_token: `EAACttKh3UaABAAz6lTFBwZC9U1305kaVsGE9fZCbPkBOBmateb2JiJ1xYnOUnhkASk3ZALTRpX8DZBYnJg0TzUv6rRLZCo0ZAe8b2rLdGZCfc0cdMfZBvhTUFI1AavPerWaIFjZCoAdnvZANdt7nV9DZBZCxvpH63PBRaJZC116YaoJKAIgZDZD`,
                method: `post`,
                description: `Demo post video à`,
                source: urlVideo,
                file_url: urlVideo,
                caption: 'Trái đất quay a à'
            }
            FB.api(`https://graph-video.facebook.com/100644248350802/videos`, 'post', ob, function(res) {
                console.log('Response FB.API video', res);
            })
        }

        function updateVideo() {
            let urlVideo = `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`;


            let ob = {
                access_token: `EAACttKh3UaABAAz6lTFBwZC9U1305kaVsGE9fZCbPkBOBmateb2JiJ1xYnOUnhkASk3ZALTRpX8DZBYnJg0TzUv6rRLZCo0ZAe8b2rLdGZCfc0cdMfZBvhTUFI1AavPerWaIFjZCoAdnvZANdt7nV9DZBZCxvpH63PBRaJZC116YaoJKAIgZDZD`,
                method: `post`,
                description: `update video lần 2`,
                source: urlVideo,
                file_url: urlVideo,
                caption: 'Trái đất quay a à lần 2'
            }
            FB.api(`https://graph-video.facebook.com/285295619191945`, 'post', ob, function(res) {
                console.log('Response FB.API updaté video', res);
            })
        }

        async function getInfoPage() {
            let url = "{{route('page.getinfopage')}}";
            console.log(url);
            let info_page = await axios.get(url);
            let arr = info_page.data[0];
            console.log(info_page.data[0]);
            for (let item in arr) {
                console.log(arr[item].PAGE_ID);
                $('#page_info').append(`
                <li class="account-selected">
                    <a href="#" data-id=${arr[item].id} data-pageid=${arr[item].PAGE_ID} >
                        <i style="color: #4065b3" class="fab fa-facebook"></i>${arr[item].PAGE_NAME} <span><i class="icon-user"></i> Facebook Pages</span><i class="icon-check"></i></a></li>
                `);
            }
        }
        async function getPost(content) {
            let ob = {
                access_token: tokenAll
            }
            FB.api(`/${content}`, ob, 'GET', (e) => {
                console.log(e.message)
                $('#get-content').append(`<h3>Message</h3></br>
                                            <p>${e.message}</p>
                    `);
            })
        }
        async function getTotalLikeShare(content) {
            let ob = {
                access_token: tokenAll,
                fields: 'shares,comments.limit(250).summary(true),likes.limit(250).summary(true)',
            }
            FB.api(`/${content}`, ob, 'GET', (e) => {
                console.log(e.message)
                $('#get-content').append(`</br>
                                            <p>Total comments ${e.comments.summary.total_count}</p>
                                            <p>Total likes ${e.likes.summary.total_count}</p>
                                           
                    `);
            })
        }

        //  function  getLongLivedUserToken(){
        //    let a='';
        //     // let url = `https://graph.facebook.com/oauth/access_token?fields=access_token&grant_type=fb_exchange_token&client_id={{config('key.app_id')}}&client_secret={{config('key.app_secret')}}&fb_exchange_token=${token}`;//get {long-lived-user-access-token}
        //     // let dataLongUserToken = await axios.post(url);
        //      let obj={
        //         fb_exchange_token:token,
        //         client_id:`{{config('key.app_id')}}`,
        //         client_secret:`{{config('key.app_secret')}}`,

        //      };
        //      FB.api('https://graph.facebook.com/oauth/access_token?fields=access_token&grant_type=fb_exchange_token','post', obj, function(res){
        //         console.log('Response get long live user token', res.access_token);
        //         console.log(res.access_token);
        //             let obj ={
        //                 access_token: res.access_token
        //             };
        //             console.log('obj',obj);
        //             FB.api(`https://graph.facebook.com/554721628578292/accounts?access_token=${res.access_token}`,'post', obj, function(res){
        //                 console.log('Response get Long Page token', res);
        //             });
        //      });


        // }
        function getLongLivedUserToken() {
            let a = '';
            // let url = `https://graph.facebook.com/oauth/access_token?fields=access_token&grant_type=fb_exchange_token&client_id={{config('key.app_id')}}&client_secret={{config('key.app_secret')}}&fb_exchange_token=${token}`;//get {long-lived-user-access-token}
            // let dataLongUserToken = await axios.post(url);
            let obj = {
                fb_exchange_token: token,
                client_id: `190991432110496`,
                client_secret: `c4f4b63930fa29fb967d40fa577bf126`,

            };
            FB.api('https://graph.facebook.com/oauth/access_token?fields=access_token&grant_type=fb_exchange_token', 'post', obj, function(res) {
                console.log('Response get long live user token', res.access_token);
             

                fetch(`https://graph.facebook.com/me/accounts?access_token=${res.access_token}`)
                    .then(response => response.json())
                    .then(data => {
                            console.log(data.data)
                        // axios.post("{{route('page.createpage')}}", {
                        //         data: data.data,
                        //     })
                        //     .then(res => {
                        //         console.log("data reponse long token ", res.response);
                        //     }).catch(e => {
                        //         console.warn("errors reponse long token", e.response);
                        //     })
                    });
            });


        }

        async function getLongLivedPageToken() {

            getLongLivedUserToken();

        }

        function setElements(isLoggedIn) {
            if (isLoggedIn) {
                document.getElementById('logout').style.display = 'block';
                document.getElementById('profile').style.display = 'block';
                document.getElementById('feed').style.display = 'block';
                document.getElementById('fb-btn').style.display = 'none';
                document.getElementById('heading').style.display = 'none';
            } else {
                document.getElementById('logout').style.display = 'none';
                document.getElementById('profile').style.display = 'none';
                document.getElementById('feed').style.display = 'none';
                document.getElementById('fb-btn').style.display = 'block';
                document.getElementById('heading').style.display = 'block';
            }
        }
    </script>

    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">SocialAuth</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a href="index.html">Home</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li></li>
                    <!-- <fb:login-button
              id="fb-btn"
              scope="public_profile,email,user_birthday,user_location,user_posts"
              onlogin="checkLoginState();">
            </fb:login-button> -->

                </ul>
            </div>
            <!--/.nav-collapse -->
        </div>
    </nav>

    <div class="container">
        <a id="logout" href="#" onclick="logout()">Logout</a>
        <h3 id="heading">Log in to view your profile</h3>
        <div id="profile"></div>
        <div id="feed"></div>
        <div id="certificates"></div>
        <div id="demo"></div>
    </div>
    <div class="container">
        <input type="file" id='imageInput' name='filePath' accept="image/*" multiple>
        <div class="col-xl-12 composer-accounts-list">

            <button id="fb-btn" class="btn btn-primary" onclick="callFBLogin();">Login</button>
            <ul id='page_info'>
                <!-- <li class="account-selected">
                    <a href="#" data-id="15433" data-net="100644248350802" data-network="facebook_pages" data-category="value">
                        <i style="color: #4065b3" class="fab fa-facebook"></i>Post pages<span><i class="icon-user"></i> Facebook Pages</span><i class="icon-check"></i></a></li>
                <li>
                    <a href="#" data-id="15434" data-net="114159690317462" data-network="facebook_pages" data-category="value">
                        <i style="color: #4065b3" class="fab fa-facebook"></i>Hello 1<span><i class="icon-user"></i> Facebook Pages</span><i class="icon-check"></i></a></li> -->
            </ul>
        </div>
        <div class="btn-group dropup">
            <input type="text" class="form-control" id="inputTxt" aria-label="Amount (to the nearest dollar)">&nbsp;&nbsp;
            <button type="submit" class="btn btn-success" id="btn-press"><i class="icon-share-alt"></i>
                Post Now</button>

            &nbsp;&nbsp;
            <button type="submit" class="btn btn-warning" id="btn-delete"><i class="icon-share-alt"></i>
                Delete post</button>
            &nbsp;&nbsp;
            <button type="submit" class="btn btn-normal" id="btn-get"><i class="icon-share-alt"></i>
                Get post</button>
            &nbsp;&nbsp;
            <button type="submit" class="btn btn-danger" id="btn-update"><i class="icon-share-alt"></i>

                Update post</button>
            &nbsp;&nbsp;
            <button type="submit" class="btn btn-primary" id="btn-post-video"><i class="icon-share-alt"></i>

                Post Video</button>
            <button type="submit" class="btn btn-success" id="btn-share-like-comment"><i class="icon-share-alt"></i>
                Get Total like,comment</button>

            &nbsp;&nbsp;
            <button type="submit" class="btn btn-success" id="btn-share"><i class="icon-share-alt"></i>
                Share</button>



        </div>
        <div id="get-content"></div>

    </div>

    <script type="text/javascript">
        let btn = document.getElementById('btn-press');
        let btnShare = document.getElementById('btn-share');
        let btnDetele = document.getElementById('btn-delete');
        let btnUpdate = document.getElementById('btn-update');
        let btnPostVideo = document.getElementById('btn-post-video');
        let btnGetPost = document.getElementById('btn-get');
        let btnTotal = document.getElementById('btn-share-like-comment');

        btnShare.onclick = function() {
                FB.ui({
                display: 'popup',
                method: 'share',
                href: 'https://changeinteraction.com/toyota-motor-viet-nam',
                }, function(response){});
            }


        btnTotal.addEventListener("click", function(e) {
            e.preventDefault();
            let text = document.getElementById('inputTxt');
            let value = text.value;
            getTotalLikeShare(value);


        });

        btnGetPost.addEventListener("click", function(e) {
            e.preventDefault();
            let text = document.getElementById('inputTxt');
            let value = text.value;
            getPost(value);


        });
        // alert(btn);
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            // let text = document.getElementById('inputTxt');
            // let value = text.value;
            // contentPost(value);
            // if(!value){
            //     getIdImage();
            // }

            async function demo() {
                const fileReader = new FileReader();
                const formData = new FormData();
                const files = document.getElementById('imageInput').files;
                console.log(files);
                for(let i= 0; i < files.length ; i++){
                    formData.append('source', files[i]);
                    formData.append('access_token', tokenAll);
                    formData.append('message', 'some status message');//photo
                    formData.append("published",false);
                    // formData.append('description','this is video description');//video
                    // formData.append('title','this is video title');//video
                        //https://graph-video.facebook.com/${pageID}/videos
                        //https://graph.facebook.com/${pageID}/photos
                    let response = await fetch(`https://graph.facebook.com/${pageID}/photos`, {
                        body: formData,
                        method: 'post'
                    });
                    response = await response.json();
                    console.log(response);
                }
                
                // console.log('photo', photoData);
                
            }
            demo();

            // [].forEach.call(files,function (file){

            //     fileReader.onloadend = async () => {
            //         const photoData = new Blob([fileReader.result], {
            //             type: 'image/jpg'
            //         });

            //     };
            //     fileReader.readAsArrayBuffer(file);
            // })








        });

        // alert(btn);
        btnDetele.addEventListener("click", function(e) {
            e.preventDefault();
            let text = document.getElementById('inputTxt');
            let value = text.value;
            deletePost(value);
            // document.getElementById("demo").innerHTML = "Hello World!";
        });

        btnUpdate.addEventListener("click", function(e) {
            e.preventDefault();
            let text = document.getElementById('inputTxt');
            let value = text.value;
            updatePost(value);
            // document.getElementById("demo").innerHTML = "Hello World!";
        });
        btnPostVideo.addEventListener("click", function(e) {
            e.preventDefault();
            let text = document.getElementById('inputTxt');
            let value = text.value;
            postVideo();
        });
    </script>
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</body>

</html>