using Senai.Sstop.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Sstop.WebApi.Repositories
{
    public class EstiloRepository
    {
        List<EstiloDomain> estilos = new List<EstiloDomain>()
            {
                new EstiloDomain { IdEstilo = 1, Nome = "Rock" },
                new EstiloDomain { IdEstilo = 2, Nome = "Pop" }
            };

        private string StringConexao = "Data Source=localhost; initial catalog=RoteiroSstop;User Id=sa;Pwd=132";

        public List<EstiloDomain> Listar()
        {
            List<EstiloDomain> estilos = new List<EstiloDomain>();

            //Declaro a SqlConnection passando a string de conexão
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                //Declara a instrução a ser executada
                string QueryaSerExecutada = "SELECT IdEstilo, Nome FROM Estilos";

                //Abre o banco de dados
                con.Open();

                //Declaro um SqlDataReader para percorrer a lista
                SqlDataReader rdr;

                //Declaro um command passando o comando a ser executado e a conexão
                using (SqlCommand cmd = new SqlCommand(QueryaSerExecutada, con))
                {
                    //Executa a query
                    rdr = cmd.ExecuteReader();

                    //Percorre os dados 
                    while (rdr.Read())
                    {
                        EstiloDomain estilo = new EstiloDomain
                        {
                            IdEstilo = Convert.ToInt32(rdr["IdEstilo"]),
                            Nome = rdr["Nome"].ToString()
                        };

                        estilos.Add(estilo);
                    }
                }
            }

            return estilos;
        }

        /// <summary>
        /// Cadastra um novo estilo de música
        /// </summary>
        /// <param name="estiloDomain"></param>
        public void Cadastrar(EstiloDomain estiloDomain)
        {
            //Declara a conexão passando sua string de conexão
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                // string QuerySerExecutada = "INSERT INTO Estilos(Nome) VALUES ('" + estiloDomain.Nome + "')";
                // Declara a query passando o valor como parametro
                string QueryASerExecutada = "INSERT INTO Estilos (Nome) VALUES (@Nome)";
                //Declara o command passando a query e a conexão
                SqlCommand cmd = new SqlCommand(QueryASerExecutada, con);
                //Passa o valor do parametro
                cmd.Parameters.AddWithValue("@Nome", estiloDomain.Nome);
                //abre a conexão
                con.Open();
                //Executa o comando
                cmd.ExecuteNonQuery();
            }
        }

        /// <summary>
        /// Buscar um estilo musical por id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public EstiloDomain BuscarPorId(int id)
        {
            string QuerySelect = "SELECT IdEstilo, Nome FROM Estilos WHERE IdEstilo = @IdEstilo";

            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                con.Open();
                SqlDataReader sdr;

                using (SqlCommand cmd = new SqlCommand(QuerySelect, con))
                {
                    cmd.Parameters.AddWithValue("@IdEstilo", id);
                    sdr = cmd.ExecuteReader();


                    if (sdr.HasRows)
                    {
                        while (sdr.Read())
                        {
                            EstiloDomain estilo = new EstiloDomain
                            {
                                IdEstilo = Convert.ToInt32(sdr["IdEstilo"]),
                                Nome = sdr["Nome"].ToString()
                            };

                            return estilo;
                        }
                    }

                    return null;
                }
            }
        }

        /// <summary>
        /// Deleta um determinado estilo musical através de um id
        /// </summary>
        /// <param name="id"></param>
        public void Deletar(int id)
        {
            string QueryDelete = "DELETE FROM Estilos WHERE IdEstilo = @IdEstilo;";
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                using (SqlCommand cmd = new SqlCommand(QueryDelete, con))
                {
                    cmd.Parameters.AddWithValue("@IdEstilo", id);
                    con.Open();
                    cmd.ExecuteNonQuery();
                }
            }
        }

        /// <summary>
        /// Alterar um estilo
        /// </summary>
        /// <param name="estiloDomain"></param>
        public void Alterar(EstiloDomain estiloDomain)
        {
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                string Query = "UPDATE Estilos SET Nome = @Nome WHERE IdEstilo = @IdEstilo";

                SqlCommand cmd = new SqlCommand(Query, con);
                cmd.Parameters.AddWithValue("@Nome", estiloDomain.Nome);
                cmd.Parameters.AddWithValue("@IdEstilo", estiloDomain.IdEstilo);
                con.Open();
                cmd.ExecuteNonQuery();
            }
        }

    }
}
