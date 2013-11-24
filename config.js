module.exports={
    cookieSecret:'reunion',
    connectionstring:'mongodb://love:love123@widmore.mongohq.com:10010/lovestory',
    // connectionstring:'mongodb://localhost/njblog'
    // connectionstring:'mongodb://njblog:njblog@linus.mongohq.com:10062/NJBlog' ,
    emailSection:{
        /***
         * SMTP Server
         */
        SMTPServer:"smtp.126.com",
        AuthUser:"PacteraReunion@126.com",
        AuthPassword:"Hisoft",
        /***
         * 发件人信息
         */
        From: "Reunion ✔ <PacteraReunion@126.com>",
        /***
         * 邮件标题前缀
         */
        PreTitle:"Reunion Report-"
    }
};