using System.ComponentModel.DataAnnotations;

namespace Senai.Sstop.WebApi.Domains
{
    public class EstiloDomain
    {
        public int IdEstilo { get; set; }

        [Required(ErrorMessage = "O Nome do Estilo Musical é obrigatório.")]
        public string Nome { get; set; }
    }
}
