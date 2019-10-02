using Senai.Enderecos.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Enderecos.WebApi.Repositories
{
    public class EnderecoRepository
    {
        private string StringConexao = "Data Source=localhost; initial catalog=Endereco;Integrated Security=true";
        public void Cadastrar(EnderecoDomain endereco)
        {
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                string query = "INSERT INTO Enderecos (Nome, Logradouro, Complemento, Bairro, Localidade, UF, CEP) VALUES (@Nome, @Logradouro, @Complemento, @Bairro, @Localidade, @UF, @CEP)";
                SqlCommand cmd = new SqlCommand(query, con);
                //Passa o valor do parametro
                cmd.Parameters.AddWithValue("@Nome", endereco.Nome);
                cmd.Parameters.AddWithValue("@Logradouro", endereco.Logradouro);
                cmd.Parameters.AddWithValue("@Complemento", endereco.Complemento);
                cmd.Parameters.AddWithValue("@Bairro", endereco.Bairro);
                cmd.Parameters.AddWithValue("@Localidade", endereco.Localidade);
                cmd.Parameters.AddWithValue("@UF", endereco.UF);
                cmd.Parameters.AddWithValue("@CEP", endereco.CEP);

                con.Open();
                cmd.ExecuteNonQuery();
            }
        }

    }
}
