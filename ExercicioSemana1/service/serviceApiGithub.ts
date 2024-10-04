async function getData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    const commitArray = data.map((item: any) => ({
      avatarUrl: item.author?.avatar_url,
      authorName: item.commit.author.name,
      commitDate: item.commit.author.date,
      commitMessage: item.commit.message,
    }));

    console.log(commitArray);

    return commitArray;
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
  }
}