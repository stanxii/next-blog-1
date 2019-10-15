import React from 'react';

const profile = {
  avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
  name:'Going: Tràn viên lập trình đống đống',
  author: 'Vu Vy',
  bios: 'Thủa nhỏ, ờ nhà trồng cafe, lại thích xem khoa học, mê khám phá máy tính. Thế nên lớn lên làm dev vừa được ngồi uống cafe, vừa ngồi gõ máy tính'
}

const socialLinks = [
  { url: '', label: 'RSS' },
  { url: '', label: 'Facebook' },
  { url: '', label: 'Github' },
  { url: '', label: 'Mail' },
]

const Aside = () => (<div className="left-aside">
  <div>
    <figure className="avatar">
      <img className="avatar-img" src={profile.avatar} height="100" width="100" />
    </figure>
    <h2 className="name"> <a href="/"> {profile.name} </a></h2>
    <div className="author"> by <span> {profile.author} </span> </div>
    <p className="bios"> {profile.bios} </p>
  </div>
  <div className="social-link">
    {
      socialLinks.map((social) => (
        <a key={Math.random()} href={social.url} rel="noopener noreferrer" target="blank">{social.label}</a>
      ))
    }
  </div>
  <style jsx>{`
    .left-aside {
      float: left;
      width: 300px;
      height: 100vh;
      background: #2b2b2b;
      text-align: right;
      padding: 0 20px;
    }
    .avatar {
      margin-top: 50px;
      margin-right: 0px;
    }
    .avatar-img {
      border-radius: 50%;
    }
    .author {
      color: rgb(230, 213, 113);
      font-size: 17px;
      text-transform: uppercase;
    }
    .name {}
    .name a {
      color: rgb(233, 36, 108);
      font-size: 22px;
      line-height: 35px;
    }
    .bios {
      line-height: 20px;
    }
    .social-link {
      position: relative;
      padding-top: 25px;
    }
    .social-link a {
      text-decoration: none;
      display: block;
      margin: 8px 0;
      font-size: 14px;
    }
    .social-link:before {
      content: " ";
      display: block;
      width: 80px;
      height: 5px;
      background: rgb(103,215,238);
      float: right;
    }
  `}</style>
</div>)

export default Aside;

