using Microsoft.CodeAnalysis.CSharp.Syntax;
using Newtonsoft.Json;
using System;
using BCrypt.Net;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace savethefish.Models
{
  public class User
  {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int UserId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string UserName { get; set; }
    public string ImageUrl { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public User CreateNewUser(object body)
    {
      User newUser = JsonConvert.DeserializeObject<User>(body.ToString());
      newUser.Password = Hasher.HashPassword(newUser);
      return newUser;
    }

  }
  public class RegistrationResponse
  {
    public string responseMessage { get; set; }
    public int userId { get; set; }
  }

  public class EmailValidationResponse
  {
    public string ResponseMessage { get; set; }
    public bool isMatch { get; set; }
  }


}
