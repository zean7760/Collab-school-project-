import Layout from '../components/MyLayout.js';
import React from 'react';
import Head from 'next/head';

export default () => (
	<div>
	<Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
      <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
  	<link rel="stylesheet" href="/static/style.css" />
    </Head>
     <header className="layout">
      <div className="container">
	   <div className="row text-center">
		<div className="col-lg-10 col-lg-offset-1">
		 <h1>Collaborate</h1>
		</div>
		<div className="col-lg-10 col-lg-offset-1">
		 <h4>Find &middot; Contact  &middot; Create</h4>
		 <a className="kafe-btn kafe-btn-default top-cart" href=""><span> Create an Account</span></a>
		</div>
	   </div>
	  </div>
     </header>
     <section class="demo">
	  <div class="container">
	   <div class="row text-center">
	    <div class="section-title-bold-home">
		 <h1>Creative Industies Social Network</h1>
		</div>
        <div class="separator_wrapper">
		 <div class="separator_first_circle">
		  <div class="separator_second_circle"></div>
		 </div>
        </div>
	   </div>
	  </div>
     </section>
	</div>
)
