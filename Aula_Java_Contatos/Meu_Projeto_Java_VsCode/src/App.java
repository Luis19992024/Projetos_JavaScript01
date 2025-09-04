
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;
public class App {
    public static void main(String[] args) {

      String salvarTexto = "ArquivoSalvo.txt";
      boolean incremento = true;
      Scanner ler = new Scanner(System.in);

      String opcao;
      String nome;
do{

      try (BufferedWriter writer = new BufferedWriter(new FileWriter(salvarTexto, incremento))) {

    System.out.println("Digite seu nome: ");
    nome = ler.nextLine();
    
    writer.write(nome);
    writer.newLine();
    System.out.println("Nome Salvo com sucesso!");
    } catch (IOException e) {
        
        e.printStackTrace();
    }
    System.out.println("Deseja adicionar mais nome?[s/n]");
    opcao = ler.nextLine();

}while (opcao.equalsIgnoreCase("s")); 
    }


}

    
    

