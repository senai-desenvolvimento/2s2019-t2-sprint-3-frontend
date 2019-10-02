using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Enderecos.WebApi.Domains
{
    public class EnderecoDomain
    {
        public int idEndereco { get; set; }
        public string Nome { get; set; }
        public string Logradouro { get; set; }
        public string Complemento { get; set; }
        public string Bairro { get; set; }
        public string Localidade { get; set; }
        public string UF { get; set; }
        public string CEP { get; set; }


    }
}
