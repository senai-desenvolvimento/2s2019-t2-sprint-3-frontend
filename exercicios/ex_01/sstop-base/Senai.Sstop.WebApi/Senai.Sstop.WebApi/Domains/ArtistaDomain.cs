namespace Senai.Sstop.WebApi.Domains
{
    public class ArtistaDomain
    {
        public int IdArtista { get; set; }
        public string Nome { get; set; }
        // adicionar para cadastrar
        public int EstiloId { get; set; }
        public EstiloDomain Estilo { get; set; }
    }
}
