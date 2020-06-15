using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using savethefish.Models;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace savethefish.Controllers
{

  [Route("api")]
  [ApiController]
  public class ApiController : ControllerBase
  {
    private dbContext _dbContext;
    public ApiController(dbContext context)
    {
      _dbContext = context;
    }
    public static List<User> users = new List<User>();
    [Route("")]
    public string Index() {
      return "api";
    }

    [HttpPost("newuser")]
    public RegistrationResponse NewUser([FromBody] object body)
    {

      List<User> users = _dbContext.users.ToList();

      User user = JsonConvert.DeserializeObject<User>(body.ToString());

      _dbContext.users.Add(user);

      _dbContext.SaveChanges();

      return new RegistrationResponse()
      {
        responseMessage = "yes everythings fine dont worry about it",
        userId = user.UserId
      };
    }

  }
}