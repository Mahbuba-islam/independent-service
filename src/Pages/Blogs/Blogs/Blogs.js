import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Authentication vs. authorization</h2>
     <div>
         <div>
         <h3>Authentication</h3>
          <p>Authentication is the process of determining the users identity via the available credentials, thus verifying the identity. Some ways to authenticate one's identity are listed here:
          Usernames or passwords can be used to establish one's identity, thus gaining access to the system.
        OTPs are another way to get access to the system for a single transaction
        Apps that generate security codes via the third party, thus enabling access for the user
         Biometrics such as an eye scan or fingerprints can be used to gain access</p>
         </div>
          
     <div>
      <h3>authorization</h3>
      <p>The act of validating the users are the same which they are claiming to be is called authentication. This is the very initial stage of any security process. A basic example of authentications is providing someone with permission to download a file from the server after providing the credentials or providing access to individual users to an application. On the other hand, in the process of system security, the process of providing access to a specific resource or function is called authorization.</p>
     </div>
    </div>

    <div>
    <h3>why are you using firebase?</h3>
           <p>Firebase is a famous product of Google which is used by so many developers to add backend functionality for their website as well as apps. It will make your job really easier for backend database and handling the database. It's by Google can be used for the following: Firebase manages all data real-time in the database.Firebase can be used when you do not want to spend a lot of time developing your own backend. It can be used for rapid development. I have been using it in my apps in production. You will not have to take care of servers, etc, 
</p>
    </div> 
          
<div>
    <h3>
    What other options do you have to implement authentication?
    </h3>
    <p>Authentication options 1 Authentication application. ... 2 Security key. ... 3 PIV or CAC for federal government employees and military. ... 4 Text message / Phone call. ... 5 Backup codes Backup codes are an accessible option for users who do not have access to a phone.</p>
</div>
<div>
    <h3>What other services does firebase provide other than authentication?</h3>
    <p>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.</p>
</div>
</div>
        
    );
};

export default Blogs;