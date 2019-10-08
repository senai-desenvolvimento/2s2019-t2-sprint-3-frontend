using Microsoft.AspNetCore.Mvc;
using Senai.Sstop.WebApi.Domains;
using Senai.Sstop.WebApi.Repositories;
using System.Collections.Generic;

namespace Senai.Sstop.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class EstilosController : ControllerBase
    {
        //[HttpGet]
        //public string Get()
        //{
        //    return "Requisição recebida";
        //}

        List<EstiloDomain> estilos = new List<EstiloDomain>()
            {
                new EstiloDomain { IdEstilo = 1, Nome = "Rock" },
                new EstiloDomain { IdEstilo = 2, Nome = "Pop" }
            };

        EstiloRepository EstiloRepository = new EstiloRepository();
        
        [HttpGet]
        public IEnumerable<EstiloDomain> Get()
        {
            //return estilos;
            return EstiloRepository.Listar();
        }
        
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            //EstiloDomain Estilo = estilos.Find(x => x.IdEstilo == id);
            EstiloDomain Estilo = EstiloRepository.BuscarPorId(id);
            if (Estilo == null)
            {
                return NotFound();
            }
            return Ok(Estilo);
        }

        [HttpPost]
        public IActionResult Cadastrar(EstiloDomain estiloDomain)
        {
            //estilos.Add(new EstiloDomain { IdEstilo = estilos.Count + 1, Nome = "Eletrônica" });
            // estilos.Add(new EstiloDomain { IdEstilo = estilos.Count + 1, Nome = estiloDomain.Nome });
            EstiloRepository.Cadastrar(estiloDomain);
            // return Ok(estilos);
            return Ok();
        }

        [HttpPut]
        public IActionResult Atualizar(EstiloDomain estiloDomain)
        {
            //EstiloDomain estiloProcurado = estilos.Find(x => x.IdEstilo == estiloDomain.IdEstilo);
            //estiloProcurado.Nome = estiloDomain.Nome;
            EstiloRepository.Alterar(estiloDomain);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            //estilos.Remove(estilos.Find(x => x.IdEstilo == id));
            EstiloRepository.Deletar(id);
            return Ok();
        }
    }
}