using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using savethefish.Models;
using System.Collections.Generic;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore.Internal;

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

    [HttpPost("checkemail")]
    public EmailValidationResponse CheckEmail([FromBody] object body)
    {
      var dict = System.Text.Json.JsonSerializer.Deserialize<Dictionary<string, string>>(body.ToString());
      string email = dict.Values.First();

      User matchedUser = _dbContext.users.FirstOrDefault(u => u.Email == email);

      if(matchedUser != null)
      {
        return new EmailValidationResponse()
        {
          ResponseMessage = "Email Found",
          isMatch = true
        };
      }
      else
      {
        return new EmailValidationResponse()
        {
          ResponseMessage = "No email found",
          isMatch = false
        };
      }

    }

  }
}