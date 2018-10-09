import React from 'react';
import Head from 'next/head';

export default function IndexPage(){
	return (
	<div  data-page-location="./pages/index.js">
		<Head>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
		<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
		<link rel="stylesheet" href="/static/style.css" />
		<link rel="icon" type="image/x-icon" href="/static/img/favicon.ico" />
        <script src="static/js/jquery.min.js"></script>
        <script src="static/js/bootstrap.min.js"></script>
        <script src="static/js/base.js"></script>
        <script src="static/plugins/slimscroll/jquery.slimscroll.js"></script>
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
           <ul class="nav navbar-nav">
            <li class="dropdown mega-avatar">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                    <span class="avatar w-32">
                        <img src="assets/img/users/2.jpg" class="img-resonsive img-circle" width="25" height="25" alt="..."/>
                    </span>
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

           </ul>
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
         <div class="p-2 nav-icon-lg clean-black">
         <a class="nav-icon" href="explore.html"><em class="fa fa-crosshairs"></em>
          <span>Explore</span>
         </a>
         </div>
         <div class="p-2 nav-icon-lg mint-green">
         <a class="nav-icon" href="upload.html"><em class="fab fa-instagram"></em>
          <span>Upload</span>
         </a>
         </div>
         <div class="p-2 nav-icon-lg clean-black">
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

                <section class="upload">

                        <div class="row">
                            <div class="col-lg-12">

                            <div class="box">
                                <form>
                                    <textarea class="form-control no-border" rows="3" placeholder="Type something..."></textarea>
                                </form>
                                <div class="box-footer clearfix">
                                    <button class="kafe-btn kafe-btn-mint-small pull-right btn-sm">Upload</button>
                                    <ul class="nav nav-pills nav-sm">
                                        <li class="nav-item"><a class="nav-link" href=""><i class="fa fa-camera text-muted"></i></a></li>
                                        <li class="nav-item"><a class="nav-link" href=""><i class="fa fa-video text-muted"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </body>
        </div>
    )}
