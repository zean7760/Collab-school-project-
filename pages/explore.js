import Layout from '../components/MyLayout.js'
import Head from 'next/head';

var slimScrollDiv= {
    position: 'relative',
    overflow: 'hidden',
    width: 'auto',
    height: '416.983 px'
};

var slimscroll={
    height: '230px',
    overflow: 'hidden',
    width: 'auto',
    height: '416.983px'
};

var slimScrollBar={
    background: 'rgb(158, 165, 171) none repeat scroll 0% 0%',
    width: '8px',
    position: 'absolute',
    top: '0px',
    opacity: '0.4',
    display: 'block',
    borderradius: '7px',
    zindex: '99',
    right: '1px'
};

var explorebox={
    background: "linear-gradient( rgba(34,34,34,0.2), rgba(34,34,34,0.2)), url('assets/img/posts/22.gif') no-repeat",
    backgroundsize: 'cover',
    backgroundposition: 'center center',
    webkitbackgroundsize: 'cover',
    mozbackgroundsize: 'cover',
    obackgroundsize: 'cover',
};

export default () => (
    <div>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
            <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
            <link rel="stylesheet" href="/static/main.css" />
            <link rel="icon" type="image/x-icon" href="/static/img/favicon.ico" />
        </Head>
        <body>
            <header class="tr-header">
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="index.html"><i class="fab fa-instagram"></i> Collaborate</a>
                        </div>
                        <div class="navbar-left">
                            <div class="collapse navbar-collapse" id="navbar-collapse">
                            <ul class="nav navbar-nav"></ul>
                            </div>
                        </div>
                    <div class="navbar-right">
                        <ul class="nav navbar-nav"></ul>
                        <li>
                            <div class="search-dashboard">
                                <form>
                                    <input placeholder="Search here" type="text"/>
                                    <button type="submit"><i class="fa fa-search"></i></button>
                                </form>
                            </div>
                        </li>

                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i class="fa fa-bell noti-icon"></i>
                                <span class="badge badge-danger badge-pill noti-icon-badge">4</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-lg">

                                <div class="dropdown-item noti-title">
                                <h6 class="m-0">
                                    <span class="pull-right">
                                        <a href="" class="text-dark"><small>Clear All</small></a>
                                    </span>Notification
                                </h6>
                                </div>

                                <div class="slimScrollDiv" style={slimScrollDiv}>
                                <div class="slimscroll" style={slimscroll}>
                                <div id="Slim">
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-success"><i class="fa fa-comment"></i></div>
                                    <p class="notify-details">Caleb Flakelar commented on Admin<small class="text-muted">1 min ago</small></p>
                                </a>
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-success"><i class="fa fa-user-plus"></i></div>
                                    <p class="notify-details">Grace Flake followed you.<small class="text-muted">5 hours ago</small></p>
                                </a>
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-success"><i class="fa fa-heart"></i></div>
                                    <p class="notify-details">Carlos Crouch liked your photo.<small class="text-muted">3 days ago</small></p>
                                </a>
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-success"><i class="fa fa-comment"></i></div>
                                    <p class="notify-details">Caleb Flakelar commented on Admin<small class="text-muted">4 days ago</small></p>
                                </a>
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-success"><i class="fa fa-user-plus"></i></div>
                                    <p class="notify-details">Maureen Hilda followed you.<small class="text-muted">7 days ago</small></p>
                                </a>
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-success"><i class="fa fa-heart"></i></div>
                                    <p class="notify-details">Carlos Crouch liked your photo.<small class="text-muted">13 days ago</small></p>
                                </a>
                                </div>
                                <div class="slimScrollBar" style={slimScrollBar}></div>
                                <div class="slimScrollRail" style="width: 8px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51) none repeat scroll 0% 0%; opacity: 0.2; z-index: 90; right: 1px;"></div>
                                </div>
                                </div>
                                <a href="photo_notifications.html" class="dropdown-item text-center notify-all">
                                View all <i class="fa fa-arrow-right"></i>
                                </a>
                            </div>
                        </li>
                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i class="fa fa-envelope noti-icon"></i>
                                <span class="badge badge-success badge-pill noti-icon-badge">6</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-lg dropdown-new">
                                <div class="dropdown-item noti-title">
                                    <h6 class="m-0">
                                        <span class="float-right">
                                        <a href="" class="text-dark"><small>Clear All</small></a>
                                        </span>Chat
                                    </h6>
                                </div>

                                <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 416.983px;">
                                    <div class="slimscroll" style="max-height: 230px; overflow: hidden; width: auto; height: 416.983px;">
                                        <div id="Slim2">
                                            <a href="javascript:void(0);" class="dropdown-item notify-item nav-user">
                                                <div class="notify-icon"><img src="assets/img/users/1.jpg" class="img-responsive img-circle" alt=""/> </div>
                                                <p class="notify-details">Cristina Pride</p>
                                                <p class="text-muted font-13 mb-0 user-msg">Hi, How are you? What about our next meeting</p>
                                            </a>
                                            <a href="javascript:void(0);" class="dropdown-item notify-item nav-user">
                                                <div class="notify-icon"><img src="assets/img/users/2.jpg" class="img-responsive img-circle" alt=""/> </div>
                                                <p class="notify-details">Sam Garret</p>
                                                <p class="text-muted font-13 mb-0 user-msg">Yeah everything is fine</p>
                                            </a>
                                            <a href="javascript:void(0);" class="dropdown-item notify-item nav-user">
                                                <div class="notify-icon"><img src="assets/img/users/3.jpg" class="img-responsive img-circle" alt=""/> </div>
                                                <p class="notify-details">Karen Robinson</p>
                                                <p class="text-muted font-13 mb-0 user-msg">Wow that's great</p>
                                            </a>
                                            <a href="javascript:void(0);" class="dropdown-item notify-item nav-user">
                                                <div class="notify-icon"><img src="assets/img/users/4.jpg" class="img-responsive img-circle" alt=""/> </div>
                                                <p class="notify-details">Sherry Marshall</p>
                                                <p class="text-muted font-13 mb-0 user-msg">Hi, How are you? What about our next meeting</p>
                                            </a>
                                            <a href="javascript:void(0);" class="dropdown-item notify-item nav-user">
                                                <div class="notify-icon"><img src="assets/img/users/5.jpg" class="img-responsive img-circle" alt=""/> </div>
                                                <p class="notify-details">Shawn Millard</p>
                                                <p class="text-muted font-13 mb-0 user-msg">Yeah everything is fine</p>
                                            </a>
                                        </div>
                                        <div class="slimScrollBar" style="background: rgb(158, 165, 171) none repeat scroll 0% 0%; width: 8px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;"></div>
                                        <div class="slimScrollRail" style="width: 8px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51) none repeat scroll 0% 0%; opacity: 0.2; z-index: 90; right: 1px;"></div>
                                    </div>
                                </div>
                                <a href="photo_chat.html" class="dropdown-item text-center notify-all">
                                    View all <i class="fa fa-arrow-right"></i>
                                </a>
                            </div>
                        </li>

                            <li class="dropdown mega-avatar">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                    <span class="avatar w-32"><img src="assets/img/users/2.jpg" class="img-resonsive img-circle" width="25" height="25" alt="..."/></span>
                                    <span class="hidden-xs">
                                        Alex Grantte
                                    </span>
                                </a>
                                <div class="dropdown-menu w dropdown-menu-scale pull-right">
                                    <a class="dropdown-item" href="#"><span>New Story</span></a>
                                    <a class="dropdown-item" href="#"><span>Become a Member</span></a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#"><span>Profile</span></a>
                                    <a class="dropdown-item" href="#"><span>Settings</span></a>
                                    <a class="dropdown-item" href="#">Need help?</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Sign out</a>
                                </div>
                            </li>
                        </div>
                    </div>
                </nav>
            </header>

            <section class="nav-sec">
            <div class="d-flex justify-content-between">
                <div class="p-2 nav-icon-lg dark-black">
                <a class="nav-icon" href="home.html"><em class="fa fa-home"></em>
                <span>Home</span>
                </a>
                </div>
                <div class="p-2 nav-icon-lg mint-green">
                <a class="nav-icon" href="explore.html"><em class="fa fa-crosshairs"></em>
                <span>Explore</span>
                </a>
                </div>
                <div class="p-2 nav-icon-lg dark-black">
                <a class="nav-icon" href="upload.html"><em class="fab fa-instagram"></em>
                <span>Upload</span>
                </a>
                </div>
                <div class="p-2 nav-icon-lg dark-black">
                <a class="nav-icon" href="stories.html"><em class="fa fa-align-left"></em>
                <span>Stories</span>
                </a>
                </div>
                <div class="p-2 nav-icon-lg dark-black">
                <a class="nav-icon" href="profile.html"><em class="fa fa-user"></em>
                <span>Profile</span>
                </a>
                </div>
            </div>
            </section>


            <section class="newsfeed">
            <div class="container">
                <div class="row one-row">
                    <div class="col-lg-12">
                        <h4>Sections</h4>
                    </div>
                </div>
            <div class="row top-row">

            <div class="col-lg-3">
                <div class="tr-section">
                <div class="tr-post">
                <div class="entry-header">
                <div class="entry-thumbnail">
                    <a href="#"><img class="img-fluid" src="assets/img/posts/30.jpg" alt="Image"/></a>
                </div>
                </div>
                <div class="post-content">
                <div class="card-content">
                    <h4>Design</h4>
                </div>
                </div>
                </div>
                </div>
            </div>

            <div class="col-lg-3">
                <div class="tr-section">
                <div class="tr-post">
                <div class="entry-header">
                <div class="entry-thumbnail">
                    <a href="#"><img class="img-fluid" src="assets/img/posts/27.jpg" alt="Image"/></a>
                </div>
                </div>
                <div class="post-content">
                <div class="card-content">
                    <h4>Software</h4>
                </div>
                </div>
                </div>
                </div>
            </div>

            <div class="col-lg-3">
                <div class="tr-section">
                <div class="tr-post">
                <div class="entry-header">
                <div class="entry-thumbnail">
                    <a href="#"><img class="img-fluid" src="assets/img/posts/28.jpg" alt="Image"/></a>
                </div>
                </div>
                <div class="post-content">
                <div class="card-content">
                    <h4>Video</h4>
                </div>
                </div>
                </div>
                </div>
            </div>

            <div class="col-lg-3">
                <div class="tr-section">
                <div class="tr-post">
                <div class="entry-header">
                <div class="entry-thumbnail">
                    <a href="#"><img class="img-fluid" src="assets/img/posts/31.jpg" alt="Image"/></a>
                </div>
                </div>
                <div class="post-content">
                <div class="card-content">
                    <h4>Tinkering (Hardware)</h4>
                </div>
                </div>
                </div>
                </div>
            </div>

            </div>

            <div class="row one-row">
            <div class="col-lg-12">
                <h4>Explore</h4>
            </div>
            </div>

            <div class="row">

            <div class="col-lg-4">
                <a href="#myModal" data-toggle="modal">
                <div class="explorebox"style={explorebox}>
                <div class="explore-top">
                <div class="explore-like"><i class="fa fa-heart"></i> <span>14,100</span></div>
                <div class="explore-circle pull-right"><i class="far fa-bookmark"></i></div>
                </div>
                <div class="explore-body">
                <div class=""><img class="img-circle" src="assets/img/users/13.jpeg" alt="user"/></div>
                </div>
                </div>
                </a>
            </div>

            <div class="col-lg-4">
                <a href="#myModal" data-toggle="modal">
                <div class="explorebox"
                style="background: linear-gradient( rgba(34,34,34,0.2), rgba(34,34,34,0.2)), url('assets/img/posts/7.jpg') no-repeat;
                        background-size: cover;
                        background-position: center center;
                        -webkit-background-size: cover;
                        -moz-background-size: cover;
                        -o-background-size: cover;">
                <div class="explore-top">
                <div class="explore-like"><i class="fa fa-heart"></i> <span>100,100</span></div>
                <div class="explore-circle pull-right"><i class="far fa-bookmark"></i></div>
                </div>
                <div class="explore-body">
                <div class=""><img class="img-circle" src="assets/img/users/1.jpg" alt="user"/></div>
                </div>
                </div>
                </a>
            </div>

            <div class="col-lg-4">
                <a href="#myModal" data-toggle="modal">
                <div class="explorebox"
                style="background: linear-gradient( rgba(34,34,34,0.2), rgba(34,34,34,0.2)), url('assets/img/posts/19.jpg') no-repeat;
                        background-size: cover;
                        background-position: center center;
                        -webkit-background-size: cover;
                        -moz-background-size: cover;
                        -o-background-size: cover;">
                <div class="explore-top">
                <div class="explore-like"><i class="fa fa-heart"></i> <span>100</span></div>
                <div class="explore-circle pull-right"><i class="far fa-bookmark"></i></div>
                </div>
                <div class="explore-body">
                <div class=""><img class="img-circle" src="assets/img/users/2.jpg" alt="user"/></div>
                </div>
                </div>
                </a>
            </div>

            </div>

            <div class="row">

            <div class="col-lg-4">
                <a href="#myModal" data-toggle="modal">
                <div class="explorebox"
                style="background: linear-gradient( rgba(34,34,34,0.2), rgba(34,34,34,0.2)), url('assets/img/posts/16.jpg') no-repeat;
                        background-size: cover;
                        background-position: center center;
                        -webkit-background-size: cover;
                        -moz-background-size: cover;
                        -o-background-size: cover;">
                <div class="explore-top">
                <div class="explore-like"><i class="fa fa-heart"></i> <span>324</span></div>
                <div class="explore-circle pull-right"><i class="far fa-bookmark"></i></div>
                </div>
                <div class="explore-body">
                <div class=""><img class="img-circle" src="assets/img/users/3.jpg" alt="user"/></div>
                </div>
                </div>
                </a>
            </div>

            <div class="col-lg-4">
                <a href="#myModal" data-toggle="modal">
                <div class="explorebox"
                style="background: linear-gradient( rgba(34,34,34,0.2), rgba(34,34,34,0.2)), url('assets/img/posts/17.jpg') no-repeat;
                        background-size: cover;
                        background-position: center center;
                        -webkit-background-size: cover;
                        -moz-background-size: cover;
                        -o-background-size: cover;">
                <div class="explore-top">
                <div class="explore-like"><i class="fa fa-heart"></i> <span>1023</span></div>
                <div class="explore-circle pull-right"><i class="far fa-bookmark"></i></div>
                </div>
                <div class="explore-body">
                <div class=""><img class="img-circle" src="assets/img/users/4.jpg" alt="user"/></div>
                </div>
                </div>
                </a>
            </div>

            <div class="col-lg-4">
                <a href="#myModal" data-toggle="modal">
                <div class="explorebox"
                style="background: linear-gradient( rgba(34,34,34,0.2), rgba(34,34,34,0.2)), url('assets/img/posts/20.jpg') no-repeat;
                        background-size: cover;
                        background-position: center center;
                        -webkit-background-size: cover;
                        -moz-background-size: cover;
                        -o-background-size: cover;">
                <div class="explore-top">
                <div class="explore-like"><i class="fa fa-heart"></i> <span>40</span></div>
                <div class="explore-circle pull-right"><i class="far fa-bookmark"></i></div>
                </div>
                <div class="explore-body">
                <div class=""><img class="img-circle" src="assets/img/users/5.jpg" alt="user"/></div>
                </div>
                </div>
                </a>
            </div>

            </div>

            <div class="row">

            <div class="col-lg-4">
                <a href="#myModal" data-toggle="modal">
                <div class="explorebox"
                style="background: linear-gradient( rgba(34,34,34,0.2), rgba(34,34,34,0.2)), url('assets/img/posts/8.jpg') no-repeat;
                        background-size: cover;
                        background-position: center center;
                        -webkit-background-size: cover;
                        -moz-background-size: cover;
                        -o-background-size: cover;">
                <div class="explore-top">
                <div class="explore-like"><i class="fa fa-heart"></i> <span>63,453</span></div>
                <div class="explore-circle pull-right"><i class="far fa-bookmark"></i></div>
                </div>
                <div class="explore-body">
                <div class=""><img class="img-circle" src="assets/img/users/6.jpg" alt="user"/></div>
                </div>
                </div>
                </a>
            </div>

            <div class="col-lg-4">
                <a href="#myModal" data-toggle="modal">
                <div class="explorebox"
                style="background: linear-gradient( rgba(34,34,34,0.2), rgba(34,34,34,0.2)), url('assets/img/posts/9.jpg') no-repeat;
                        background-size: cover;
                        background-position: center center;
                        -webkit-background-size: cover;
                        -moz-background-size: cover;
                        -o-background-size: cover;">
                <div class="explore-top">
                <div class="explore-like"><i class="fa fa-heart"></i> <span>1243</span></div>
                <div class="explore-circle pull-right"><i class="far fa-bookmark"></i></div>
                </div>
                <div class="explore-body">
                <div class=""><img class="img-circle" src="assets/img/users/7.jpg" alt="user"/></div>
                </div>
                </div>
                </a>
            </div>

            <div class="col-lg-4">
                <a href="#myModal" data-toggle="modal">
                <div class="explorebox"
                style="background: linear-gradient( rgba(34,34,34,0.2), rgba(34,34,34,0.2)), url('assets/img/posts/10.jpg') no-repeat;
                        background-size: cover;
                        background-position: center center;
                        -webkit-background-size: cover;
                        -moz-background-size: cover;
                        -o-background-size: cover;">
                <div class="explore-top">
                <div class="explore-like"><i class="fa fa-heart"></i> <span>645</span></div>
                <div class="explore-circle pull-right"><i class="far fa-bookmark"></i></div>
                </div>
                <div class="explore-body">
                <div class=""><img class="img-circle" src="assets/img/users/8.jpg" alt="user"/></div>
                </div>
                </div>
                </a>
            </div>

            </div>

            </div>
            </section>


            <div id="myModal" class="modal fade">
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-body">

                <div class="row">

                <div class="col-md-8 modal-image">
                <img class="img-responsive" src="assets/img/posts/6.jpg" alt="Image"/>
                </div>
                <div class="col-md-4 modal-meta">
                <div class="modal-meta-top">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    <span aria-hidden="true">×</span><span class="sr-only">Close</span>
                </button>
                <div class="img-poster clearfix">
                    <a href=""><img class="img-responsive img-circle" src="assets/img/users/18.jpg" alt="Image"/></a>
                    <strong><a href="">Benjamin</a></strong>
                    <span>12 minutes ago</span><br/>
                    <a href="" class="kafe kafe-btn-mint-small"><i class="fa fa-check-square"></i> Following</a>
                </div>

                <ul class="img-comment-list">
                    <li>
                    <div class="comment-img">
                    <img src="assets/img/users/17.jpeg" class="img-responsive img-circle" alt="Image"/>
                    </div>
                    <div class="comment-text">
                    <strong><a href="">Anthony McCartney</a></strong>
                    <p>Hello this is a test comment.</p> <span class="date sub-text">on December 5th, 2016</span>
                    </div>
                    </li>
                    <li>
                    <div class="comment-img">
                    <img src="assets/img/users/15.jpg" class="img-responsive img-circle" alt="Image"/>
                    </div>
                    <div class="comment-text">
                    <strong><a href="">Vanessa Wells</a></strong>
                    <p>Hello this is a test comment and this comment is particularly very long and it goes on and on and on.</p> <span>on December 5th, 2016</span>
                    </div>
                    </li>
                    <li>
                    <div class="comment-img">
                    <img src="assets/img/users/14.jpg" class="img-responsive img-circle" alt="Image"/>
                    </div>
                    <div class="comment-text">
                    <strong><a href="">Sean Coleman</a></strong>
                    <p class="">Hello this is a test comment.</p> <span class="date sub-text">on December 5th, 2016</span>
                    </div>
                    </li>
                    <li>
                    <div class="comment-img">
                    <img src="assets/img/users/13.jpeg" class="img-responsive img-circle" alt="Image"/>
                    </div>
                    <div class="comment-text">
                    <strong><a href="">Anna Morgan</a></strong>
                    <p class="">Hello this is a test comment.</p> <span class="date sub-text">on December 5th, 2016</span>
                    </div>
                    </li>
                    <li>
                    <div class="comment-img">
                    <img src="assets/img/users/3.jpg" class="img-responsive img-circle" alt="Image"/>
                    </div>
                    <div class="comment-text">
                    <strong><a href="">Allison Fowler</a></strong>
                    <p class="">Hello this is a test comment.</p> <span class="date sub-text">on December 5th, 2016</span>
                    </div>
                    </li>
                </ul>

                <div class="modal-meta-bottom">
                    <ul>
                        <li><a class="modal-like" href="#"><i class="fa fa-heart"></i></a><span class="modal-one"> 786,286</span> |
                            <a class="modal-comment" href="#"><i class="fa fa-comments"></i></a><span> 786,286</span> </li>
                        <li>
                        <span class="thumb-xs">
                            <img class="img-responsive img-circle" src="assets/img/users/13.jpeg" alt="Image"/>
                        </span>
                        <div class="comment-body">
                            <input class="form-control input-sm" type="text" placeholder="Write your comment..."/>
                        </div>
                        </li>
                    </ul>
                </div>

                </div>
                </div>

                </div>
            </div>

            </div>
            </div>
            </div>

            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/bootstrap.min.js"></script>
            <script src="assets/js/base.js"></script>
            <script src="assets/plugins/slimscroll/jquery.slimscroll.js"></script>

        </body>
    </div>
)
