import * as S from "./styles";

export default function PrivacyPage() {
  return (
    <S.Container>
      <S.Content>
        <S.Badge>🔒 Privacidade</S.Badge>

        <S.Title>Política de Privacidade</S.Title>

        <S.Updated>Última atualização: 05/07/2026</S.Updated>

        <S.Section>
          <S.SectionTitle>1. Informações que coletamos</S.SectionTitle>
          <S.Text>
            O Papaflix pode coletar informações fornecidas pelo usuário, como
            e-mail, dados de login, vídeos salvos, histórico de reprodução,
            preferências de navegação e interações dentro da plataforma.
          </S.Text>
        </S.Section>

        <S.Section>
          <S.SectionTitle>2. Como usamos essas informações</S.SectionTitle>
          <S.Text>
            Utilizamos os dados para permitir login, salvar favoritos, continuar
            vídeos de onde o usuário parou, melhorar a experiência da plataforma,
            manter a segurança e analisar o desempenho do site.
          </S.Text>
        </S.Section>

        <S.Section>
          <S.SectionTitle>3. Serviços de terceiros</S.SectionTitle>
          <S.Text>
            Usamos serviços como Firebase, Bunny Stream, Bunny Storage e,
            futuramente, Google Analytics. Esses serviços podem processar dados
            técnicos necessários para autenticação, armazenamento, reprodução de
            vídeos, estatísticas e funcionamento da plataforma.
          </S.Text>
        </S.Section>

        <S.Section>
          <S.SectionTitle>4. Cookies e armazenamento local</S.SectionTitle>
          <S.Text>
            O Papaflix pode usar cookies e localStorage para lembrar a confirmação
            de idade, vídeos salvos, progresso de reprodução e preferências do
            usuário.
          </S.Text>
        </S.Section>

        <S.Section>
          <S.SectionTitle>5. Conteúdo adulto</S.SectionTitle>
          <S.Text>
            O acesso ao Papaflix é destinado exclusivamente a maiores de 18 anos.
            Ao continuar navegando, o usuário declara possuir idade legal para
            acessar este tipo de conteúdo em sua região.
          </S.Text>
        </S.Section>

        <S.Section>
          <S.SectionTitle>6. Direitos do usuário</S.SectionTitle>
          <S.Text>
            O usuário pode solicitar informações, correção ou remoção de dados,
            quando aplicável, entrando em contato pelos canais oficiais da
            plataforma.
          </S.Text>
        </S.Section>

        <S.Section>
          <S.SectionTitle>7. Remoção de conteúdo</S.SectionTitle>
          <S.Text>
            Caso algum conteúdo viole direitos autorais, imagem, privacidade ou
            qualquer legislação aplicável, o usuário pode solicitar análise por
            meio da página de DMCA ou contato.
          </S.Text>
        </S.Section>

        <S.Section>
          <S.SectionTitle>8. Alterações nesta política</S.SectionTitle>
          <S.Text>
            Esta política pode ser atualizada periodicamente. A versão mais
            recente estará sempre disponível nesta página.
          </S.Text>
        </S.Section>
      </S.Content>
    </S.Container>
  );
}