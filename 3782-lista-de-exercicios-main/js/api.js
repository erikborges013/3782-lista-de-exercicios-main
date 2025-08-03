const url = "http://localhost:3000"

const api = {
  async buscarFilmes() {
    try {
      const response = await axios.get(`${url}/filmes`)
      return await response.data
    }
    catch {
      alert('Erro ao buscar filmes')
      throw error
    }
  },

  async salvarFilme(filme) {
    try {
      const response = await axios.post(`${url}/filmes`, filme)
      return await response.data
    }
    catch {
      alert('Erro ao salvar filme')
      throw error
    }
  },

  async buscarFilmePorId(id) {
    try {
      const response = await axios.get(`${url}/filmes/${id}`)
      return await response.data
    }
    catch {
      alert('Erro ao buscar filme')
      throw error
    }
  },

  async editarFilme(filme) {
    try {
      const response = await axios.put(`${url}/filmes/${filme.id}`, filme)
      return await response.data
    }
    catch {
      alert('Erro ao editar filme')
      throw error
    }
  },

  async excluirFilme(id) {
    try {
      const response = await axios.delete(`${url}/filmes/${id}`)
    }
    catch {
      alert('Erro ao excluir um filme')
      throw error
    }
  },

  async buscarFilmesPorTermo(termo) {
    try {
      const response = await this.buscarFilmes(termo);
      const filtrarFilmes = response.filter(filme => {
        return (filme.nome.toLowerCase().includes(termo.toLowerCase()) || filme.genero.toLowerCase().includes(termo.toLowerCase()));
      })
      return filtrarFilmes;
    } catch (error) {
      console.error("Erro ao filtrar filmes",error);
    }
  },

  async atualizarFavorito(id, favorito) {
    try {
      const response = await axios.patch(`${url}/filmes/${id}`, {favorito});
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar favorito", error);
    }
    
  }
}

export default api