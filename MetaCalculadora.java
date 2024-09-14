import java.util.Scanner;

public class MetaCalculadora {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Entradas
        System.out.print("Digite a meta de volume: ");
        float metaMesVol = scanner.nextFloat();
        
        System.out.print("Digite a meta de operação: ");
        float metaMesOp = scanner.nextFloat();
        
        System.out.print("Digite a porcentagem de volume da manhã: ");
        float porcentagemManhaVol = scanner.nextFloat();
        
        System.out.print("Digite a porcentagem de volume da tarde: ");
        float porcentagemTardeVol = scanner.nextFloat();
        
        System.out.print("Digite a porcentagem de volume da noite: ");
        float porcentagemNoiteVol = scanner.nextFloat();
        
        if (porcentagemManhaVol + porcentagemTardeVol + porcentagemNoiteVol != 100) {
            System.out.println("Porcentagem inválida. Porcentagens de volume devem somar 100%.");
            return;
        }
        
        System.out.print("Digite a porcentagem de operação da manhã: ");
        float porcentagemManhaOp = scanner.nextFloat();
        
        System.out.print("Digite a porcentagem de operação da tarde: ");
        float porcentagemTardeOp = scanner.nextFloat();
        
        System.out.print("Digite a porcentagem de operação da noite: ");
        float porcentagemNoiteOp = scanner.nextFloat();
        
        if (porcentagemManhaOp + porcentagemTardeOp + porcentagemNoiteOp != 100) {
            System.out.println("Porcentagem inválida. Porcentagens de operação devem somar 100%.");
            return;
        }
        
        // Cálculos
        float metaManhaVol = metaMesVol * (porcentagemManhaVol / 100);
        float metaTardeVol = metaMesVol * (porcentagemTardeVol / 100);
        float metaNoiteVol = metaMesVol * (porcentagemNoiteVol / 100);
        
        float metaManhaOp = metaMesOp * (porcentagemManhaOp / 100);
        float metaTardeOp = metaMesOp * (porcentagemTardeOp / 100);
        float metaNoiteOp = metaMesOp * (porcentagemNoiteOp / 100);
        
        float operadorManhaVol = metaManhaVol / 2.5f;
        float operadorTardeVol = metaTardeVol / 2.5f;
        float operadorNoiteVol = metaNoiteVol;
        
        float operadorManhaOp = metaManhaOp / 2.5f;
        float operadorTardeOp = metaTardeOp / 2.5f;
        float operadorNoiteOp = metaNoiteOp;
        
        // Quantidade de dias no mês
        int diasMes;
        while (true) {
            System.out.print("O mês terá quantos dias? (28 a 31): ");
            diasMes = scanner.nextInt();
            if (diasMes >= 28 && diasMes <= 31) {
                break;
            } else {
                System.out.println("Por favor, insira um valor entre 28 e 31.");
            }
        }
        
        float volDiaManha = operadorManhaVol / diasMes;
        float volDiaTarde = operadorTardeVol / diasMes;
        float volDiaNoite = operadorNoiteVol / diasMes;
        
        float opDiaManha = operadorManhaOp / diasMes;
        float opDiaTarde = operadorTardeOp / diasMes;
        float opDiaNoite = operadorNoiteOp / diasMes;
        
        // Quantidade de dias trabalhados por turno
        int diasTrabalhadosManha, diasTrabalhadosTarde, diasTrabalhadosNoite;
        while (true) {
            System.out.print("Quantos o operador irá trabalhar pela manhã?: ");
            diasTrabalhadosManha = scanner.nextInt();
            
            System.out.print("Quantos o operador irá trabalhar pela tarde?: ");
            diasTrabalhadosTarde = scanner.nextInt();
            
            System.out.print("Quantos o operador irá trabalhar pela noite?: ");
            diasTrabalhadosNoite = scanner.nextInt();
            
            if (diasTrabalhadosManha + diasTrabalhadosTarde + diasTrabalhadosNoite <= diasMes) {
                break;
            } else {
                System.out.println("O total de dias trabalhados não pode exceder o número de dias no mês.");
            }
        }
        
        // Cálculo da meta
        float calculoMetaMes = (diasTrabalhadosManha * volDiaManha) + (diasTrabalhadosTarde * volDiaTarde) + (diasTrabalhadosNoite * volDiaNoite);
        float calculoOperadorMes = (diasTrabalhadosManha * opDiaManha) + (diasTrabalhadosTarde * opDiaTarde) + (diasTrabalhadosNoite * opDiaNoite);
        
        // Resultados
        System.out.printf("O operador terá uma meta de volume igual a %.2f nesse mês.%n", calculoMetaMes);
        System.out.printf("E %.2f de volume por dia.%n", calculoMetaMes / diasMes);
        
        System.out.printf("O operador terá uma meta de operação igual a %.2f nesse mês.%n", calculoOperadorMes);
        System.out.printf("E %.2f de operação por dia.%n", calculoOperadorMes / diasMes);
        
        scanner.close();
    }
}
