﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace littleworld.Web.ws
{
    /// <summary>
    /// adminSeeUser 的摘要说明
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // 若要允许使用 ASP.NET AJAX 从脚本中调用此 Web 服务，请取消对下行的注释。
    [System.Web.Script.Services.ScriptService]
    public class adminSeeUser : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }
        [WebMethod]
        public void fengAndJieUser(int userid)
        {     
            BLL.userTb userBll = new BLL.userTb();
            Model.userTb userM = userBll.GetModel(userid);
            if (userM.state == "1")
            {
                userM.state = "0";
            }
            else 
            {
                userM.state = "1";
            }
            userBll.Update(userM);
        }
    }
    
}
