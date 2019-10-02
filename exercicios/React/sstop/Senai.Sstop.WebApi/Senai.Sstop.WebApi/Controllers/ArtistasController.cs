using Microsoft.AspNetCore.Mvc;
using Senai.Sstop.WebApi.Domains;
using Senai.Sstop.WebApi.Repositories;

namespace Senai.Sstop.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class ArtistasController : ControllerBase
    {

        private ArtistaRepository ArtistaRepository = new ArtistaRepository();

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(ArtistaRepository.Listar());
        }

        [HttpPost]
        public IActionResult Cadastrar(ArtistaDomain artistaDomain)
        {
            try
            {
                ArtistaRepository.Cadastrar(artistaDomain);
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(new { mensagem = "Ocorreu um erro. " + ex.Message });
            }

        }
    }
}