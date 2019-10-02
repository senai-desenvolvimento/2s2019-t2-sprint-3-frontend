using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.Enderecos.WebApi.Domains;
using Senai.Enderecos.WebApi.Repositories;

namespace Senai.Enderecos.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class EnderecoController : ControllerBase
    {
        private EnderecoRepository EnderecoRepository = new EnderecoRepository();

        [HttpPost]
        public IActionResult Cadastrar(EnderecoDomain endereco)
        {
            try
            {
                EnderecoRepository.Cadastrar(endereco);
                return Ok();
            }
            catch(Exception e)
            {
                return BadRequest(new { mensagem = "ERRO. " + e.Message });
            }
        }

    }
}