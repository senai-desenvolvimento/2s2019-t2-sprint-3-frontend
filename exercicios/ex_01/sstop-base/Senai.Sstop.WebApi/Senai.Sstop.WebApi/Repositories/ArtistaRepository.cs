using Senai.Sstop.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace Senai.Sstop.WebApi.Repositories
{
    public class ArtistaRepository
    {
        private string StringConexao = "Data Source=localhost; initial catalog=RoteiroSstop;User Id=sa;Pwd=132";

        public List<ArtistaDomain> Listar()
        {
            List<ArtistaDomain> artistas = new List<ArtistaDomain>();

            //Declaro a SqlConnection passando a string de conexão
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                //Declara a instrução a ser executada
                string QueryaSerExecutada = "SELECT A.IdArtista, A.Nome, A.IdEstilo, E.Nome AS NomeEstilo FROM Artistas A INNER JOIN Estilos E ON A.IdEstilo = E.IdEstilo";

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
                        ArtistaDomain artista = new ArtistaDomain
                        {
                            IdArtista = Convert.ToInt32(rdr["IdArtista"]),
                            Nome = rdr["Nome"].ToString(),
                            Estilo = new EstiloDomain
                            {
                                IdEstilo = Convert.ToInt32(rdr["IdEstilo"]),
                                Nome = rdr["NomeEstilo"].ToString()
                            }
                        };

                        artistas.Add(artista);
                    }
                }
            }

            return artistas;
        }

        /// <summary>
        /// Cadastra um novo estilo de música
        /// </summary>
        /// <param name="estiloDomain"></param>
        public void Cadastrar(ArtistaDomain artistaDomain)
        {
            //Declara a conexão passando sua string de conexão
            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                // Declara a query passando o valor como parametro
                string QueryASerExecutada = "INSERT INTO Artistas (Nome, IdEstilo) VALUES (@Nome, @IdEstilo)";
                //Declara o command passando a query e a conexão
                SqlCommand cmd = new SqlCommand(QueryASerExecutada, con);
                //Passa o valor do parametro
                cmd.Parameters.AddWithValue("@Nome", artistaDomain.Nome);
                cmd.Parameters.AddWithValue("@IdEstilo", artistaDomain.EstiloId);
                //cmd.Parameters.AddWithValue("@IdEstilo", artistaDomain.Estilo.IdEstilo);
                //abre a conexão
                con.Open();
                //Executa o comando
                cmd.ExecuteNonQuery();
            }
        }
    }
}
