
import type { ChapterData } from '../types';

export const bookData: ChapterData[] = [
  {
    id: 1,
    title: 'O Que é Epigenômica?',
    summary: 'Cromatina é um complexo de DNA e proteínas que compacta o genoma e controla o acesso aos genes. A epigenética estuda mudanças hereditárias na função dos genes que não alteram a sequência de DNA, sendo a epigenômica a sua análise em escala genômica. O epigenoma é dinâmico e específico para cada tipo de célula, respondendo a sinais e regulando a expressão gênica através da metilação do DNA, modificações de histonas e estruturas 3D da cromatina. Este capítulo introduz estes conceitos e o seu impacto na saúde e na doença.',
    content: [
      { type: 'paragraph', text: 'A epigenética é definida como o estudo de mudanças na função dos genes que são hereditárias, mas não envolvem alterações no genoma. A análise da epigenética em todo o genoma é referida como epigenômica. O genoma em cada célula de um organismo multicelular é idêntico e permanece razoavelmente estático, enquanto o epigenoma é muito dinâmico, varia de um tipo de célula para outro e pode responder a vários caminhos de sinalização.' },
      { type: 'figure', id: '1.1', caption: 'Fig. 1.1: Papel central da cromatina. As modificações covalentes de histonas e DNA genômico controlam a acessibilidade da cromatina. Essas marcas são introduzidas por "escritores", interpretadas por "leitores" e podem ser removidas por "apagadores".' },
      { type: 'concept', text: 'Durante a embriogênese humana, o óvulo fertilizado, uma única célula, pode dar origem a todos os diferentes tecidos e tipos de células. As diferentes morfologias e funções desses tipos de células são baseadas na expressão diferencial dos aproximadamente 20.000 genes codificadores de proteínas. Esse uso específico do genoma é mediado por programas de expressão gênica que dependem da ação de um subconjunto de fatores de transcrição. A cromatina pode ser interpretada como um filtro específico do tipo celular da informação da sequência genômica que determina quais genes são transcritos em RNA.', simplified: 'Pense na cromatina como um porteiro para o seu DNA. Em cada tipo de célula (pele, cérebro, etc.), esse porteiro permite que apenas os genes certos sejam "lidos", o que define a função da célula. É assim que, a partir de uma única célula, obtemos todos os diferentes tipos de células do corpo, cada uma com sua função especializada.' },
      { type: 'paragraph', text: 'O inventor do termo "epigenética", Conrad Waddington, forneceu com a noção de uma "paisagem epigenética" um modelo muito ilustrativo para entender os mecanismos moleculares subjacentes às decisões do destino celular durante o desenvolvimento. O modelo de paisagem faz uma analogia com um sistema de vales de uma cordilheira, onde uma célula (representada por uma bola) começa no topo e segue caminhos existentes impulsionados pela força gravitacional. Isso leva a célula a um de vários destinos possíveis, representados como vales que se tornam mais estreitos na trajetória em direção a tipos de células terminalmente diferenciadas.' },
       { type: 'figure', id: '1.4', caption: 'Fig. 1.4: Modelos de paisagem epigenética. A diferenciação celular é acompanhada pela restrição progressiva da paisagem epigenética, indicada pelo estreitamento dos "vales" do terreno.' },
    ]
  },
  {
    id: 2,
    title: 'Métodos e Aplicações da Epigenômica',
    summary: 'Nos últimos 10 anos, a epigenômica avançou com novas tecnologias de sequenciamento que investigam a metilação do DNA, modificações de histonas e a estrutura 3D da cromatina. Este capítulo compara métodos como bisulfite sequencing, ChIP-seq, ATAC-seq e Hi-C. Apresenta consórcios como ENCODE e Roadmap Epigenomics, que mapearam centenas de epigenomas humanos. A integração destes dados permite prever a função de elementos reguladores e entender melhor a saúde e a doença humanas.',
    content: [
       { type: 'paragraph', text: 'Mapas de epigenomas humanos podem ser obtidos pelo avanço da tecnologia na aplicação de sequenciamento de nova geração com novas técnicas bioquímicas ou modificações de métodos estabelecidos, como a imunoprecipitação de cromatina (ChIP). Os métodos de sequenciamento de nova geração têm a vantagem de fornecer informações imparciais e abrangentes sobre todo o epigenoma.'},
       { type: 'concept', text: 'ChIP seguido por sequenciamento (ChIP-seq) mapeia o padrão de ligação em todo o genoma de proteínas associadas à cromatina, incluindo histonas pós-traducionalmente modificadas. O núcleo deste método é a imunoprecipitação de complexos proteína-DNA reticulados de cromatina sonicada com um anticorpo específico para a proteína de interesse.', simplified: 'O ChIP-seq é como usar um "imã" molecular (um anticorpo) para pescar uma proteína específica que está ligada ao DNA. Depois de "pescar" a proteína, sequenciamos o pedaço de DNA ao qual ela estava ligada. Isso nos mostra exatamente onde no genoma essa proteína estava trabalhando.'},
       { type: 'figure', id: '2.4', caption: 'Fig. 2.4: Comparando ChIP-seq, DNase-seq, ATAC-seq e FAIRE-seq. Estes quatro métodos de perfil de cromatina abordam diferentes aspectos da estrutura da cromatina.' },
       { type: 'paragraph', text: 'Os consórcios ENCODE, FANTOM5, Roadmap Epigenomics e IHEC (International Human Epigenome Consortium) aplicam esses métodos para o perfilamento epigenômico de alto rendimento de linhagens celulares humanas e tecidos primários, gerando milhares de mapas de epigenoma. A integração desses dados permite inferir função e insights mecanicistas, como a delineação de sequências reguladoras de genes.'}
    ]
  },
  {
    id: 3,
    title: 'A Estrutura da Cromatina',
    summary: 'A cromatina é a representação física do epigenoma, com o DNA enrolado em núcleos de histonas para formar nucleossomos. Variações nos nucleossomos, através de modificações pós-traducionais e variantes de histonas, criam uma memória epigenômica que afeta a expressão gênica. A organização espacial da cromatina em alças e domínios (TADs), mediada por proteínas como CTCF e coesina, é crucial para distinguir entre cromatina aberta (eucromatina) e fechada (heterocromatina), regulando a atividade dos genes.',
    content: [
      { type: 'paragraph', text: 'A cromatina é a representante física do epigenoma. As histonas são o principal componente proteico da cromatina e formam núcleos de octâmeros, ao redor dos quais o DNA genômico é enrolado. Esses nucleossomos são as unidades de repetição regular da cromatina.'},
      { type: 'figure', id: '3.1', caption: 'Fig. 3.1: O cromatossomo. Representação do nucleossomo contendo duas cópias de cada uma das quatro proteínas histônicas do núcleo (H2A, H2B, H3 e H4) e 147 pb de DNA genômico.' },
      { type: 'paragraph', text: 'A cromatina, em geral, pode ser distinguida em duas formas principais: sua forma ativa, eucromatina, e sua forma inativa, heterocromatina. Na última, as ilhas CpG são metiladas, os nucleossomos são arranjados de forma densa e regular, e as proteínas histônicas são trimetiladas em posições específicas para atrair proteínas especializadas que selam ainda mais a cromatina.'},
      { type: 'concept', text: 'Domínios topologicamente associados (TADs) são as unidades de organização cromossômica e segregam o genoma humano em pelo menos 2.000 domínios contendo genes corregulados. Os TADs contêm um número de genes que podem ser regulados pelo mesmo conjunto de intensificadores (enhancers) dentro dessa região genômica.', simplified: 'Os TADs são como "bairros" no nosso genoma. Genes dentro do mesmo bairro interagem frequentemente entre si, compartilhando os mesmos interruptores para ligar e desligar. As fronteiras desses bairros impedem que os genes de um bairro sejam acidentalmente controlados pelos interruptores de outro bairro, mantendo a ordem na expressão gênica.'},
      { type: 'figure', id: '3.7', caption: 'Fig. 3.7: Hierarquia da arquitetura da cromatina. Dados de Hi-C em quatro níveis de resolução são interpretados como interações inter-cromossômicas, TADs e alças intensificador-promotor.'}
    ]
  },
   {
    id: 4,
    title: 'Metilação do DNA',
    summary: 'A identidade de cada célula humana é determinada pelo seu padrão único de expressão gênica, que deve ser lembrado e passado para as células filhas por mecanismos epigenéticos, dos quais a metilação do DNA é o mais proeminente. A metilação na quinta posição da citosina (5mC) em um dinucleotídeo CpG tem um impacto profundo na estabilidade do genoma e na expressão gênica. Este capítulo apresenta o impacto da metilação do DNA na formação de heterocromatina, no silenciamento de genes e no papel de proteínas como o CTCF.',
    content: []
  },
    {
    id: 5,
    title: 'O Código de Histonas',
    summary: 'Modificações pós-traducionais de histonas são sinais epigenéticos frequentes e importantes que controlam muitos processos biológicos, como a diferenciação celular. Acetilações e metilações de lisinas nas caudas das histonas são as marcas mais bem compreendidas. Todas essas modificações formam uma coleção de sinais, referida como o código de histonas, que marcam regiões genômicas e passam informações para outros modificadores da cromatina.',
    content: []
  },
  {
    id: 6,
    title: 'Modificadores da Cromatina',
    summary: 'A atividade da cromatina é modulada por um grupo de enzimas que catalisam pequenas alterações nas proteínas histônicas. O genoma humano expressa centenas desses modificadores que reconhecem ("leem"), adicionam ("escrevem") e removem ("apagam") marcas de histonas pós-traducionais. A acetilação da cromatina está geralmente associada à ativação transcricional e é controlada por duas classes de modificadores antagônicos, KATs e KDACs. Da mesma forma, a metilação de histonas possui KMTs e KDMs.',
    content: []
  },
  {
    id: 7,
    title: 'Remodeladores e Organizadores da Cromatina',
    summary: 'A acessibilidade de sítios de ligação genômicos para fatores de transcrição e Pol II é essencial para a expressão gênica eficiente. A acessibilidade da cromatina é controlada pela metilação do DNA, modificações de histonas, mas também pela remodelação da cromatina e organização 3D. Remodeladores de cromatina usam a energia da hidrólise de ATP para deslizar, trocar ou remover nucleossomos. CTCF e coesina são as principais proteínas que organizam a cromatina em alças arquitetônicas.',
    content: []
  },
  {
    id: 8,
    title: 'Embriogênese e Diferenciação Celular',
    summary: 'O desenvolvimento embrionário é um processo rigorosamente regulado que produz, a partir de um único zigoto, os cerca de 400 diferentes tecidos e tipos de células que formam o corpo humano. O programa de diferenciação da embriogênese está sob o controle de redes de fatores de transcrição no contexto de mudanças significativas na paisagem epigenética. Este capítulo apresenta os princípios epigenômicos do desenvolvimento embrionário inicial e da pluripotência induzida.',
    content: []
  },
  {
    id: 9,
    title: 'Epigenômica Populacional e Envelhecimento',
    summary: 'O epigenoma tem funções de memória, pois é capaz de preservar os resultados de perturbações celulares por fatores ambientais na forma de alterações na metilação do DNA, modificações de histonas ou organização 3D da cromatina. O envelhecimento pode ser o mais importante desses fenótipos, pois é um resultado inevitável da vida. Marcas epigenômicas comuns do envelhecimento estão associadas a padrões específicos de cromatina e podem servir como biomarcadores.',
    content: []
  }
];
