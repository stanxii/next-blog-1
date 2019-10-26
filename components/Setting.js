import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { withFirebase } from '../components/firebase';
const Setting = (props) => {
  const [setting, setSetting] = useState({ title: '', author: '' });
  const [addingLink, setAddingLink] = useState({ title: '', url: '' });
  const { firebase } = props;
  useEffect(() => {
    firebase.getPageSetting(setSetting);
  },[]);

  function onChange (e) {
    const { value, name } = e.target;
    setSetting({ ...setting, [name]: value });
  };

  function onChangeSocialLink (indx) {
    return function (e) {
      const { value, name } = e.target;
      const { links } = setting;
      links[indx][name] = value;
      setSetting({ ...setting, links });
    }
  };

  function onChangeAddingSocial (e) {
    const { value, name } = e.target;
    setAddingLink({ ...addingLink, [name]: value });
  };

  function addSocialLink () {
    let { links = [] } = setting;
    if (!addingLink.title || !addingLink.url) return
    if (links) {
      links.push(addingLink);
    } else {
      links = [addingLink];
    }
    setAddingLink({ title: '', url: ''});
    setSetting({...setting, links });
  }

  function onSubmit () {
    const { firebase } = props;
    firebase.setPageSetting(setting, e => {
      if (!e) {
        Swal.fire('', 'Lưu thành công', 'success');
      } else {
        Swal.fire('', e.message, 'error');
      }
    });
  };

  return (
    <div>
      <form className="setting-form animate pure-form pure-form-stacked" >
        <label htmlFor="title"><b>Title</b></label>
        <input className="title" onChange={onChange} value={setting.title}  type="text" placeholder="Enter title" name="title" required />
        <label htmlFor="author"><b>Author</b></label>
        <input className="author"  onChange={onChange} value={setting.author} type="text" placeholder="Enter Author" name="author" required />
        <label htmlFor="bio"><b>Bio</b></label>
        <textarea className="bio" rows="10" value={setting.bio || ''} name="bio" onChange={onChange} />
        <label><br /><b>Social Links</b></label>
        {
          setting.links && setting.links.map((social, indx) => (
            <div className="pure-g social-link" key={indx}>
              <input onChange={onChangeSocialLink(indx)} className="pure-u-5-12" placeholder="Title" name="title" value={social.title} />
              <input onChange={onChangeSocialLink(indx)} className="pure-u-5-12" placeholder="Url" name="url" value={social.url} />
            </div>
          ))
        }
        <div className="pure-g social-link">
          <input onChange={onChangeAddingSocial} className="pure-u-5-12" placeholder="Title" name="title" value={addingLink.title} />
          <input onChange={onChangeAddingSocial} className="pure-u-5-12" placeholder="Url" name="url" value={addingLink.url} />
          <button type="button" className="pure-u-1-12 pure-button pure-button-primary" onClick={addSocialLink}>Add</button>
        </div>
        <br />
        <button type="button" className="pure-button pure-button-primary" onClick={onSubmit}>Save</button>
      </form>
      <style jsx>{`
        .setting-form {
          padding: 10px 20px;
        }
        .setting-form input, textarea {
          color: black;
        }
        .title, .author {
          color: black;
          width: 600px;
        }
        .bio {
          color: black;
          width: 600px;
        }
        .social-link {
          width: 600px;
        }
      `}</style>
    </div>
  )
}
export default withFirebase(Setting);