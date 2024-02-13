#include <iostream>

int subtracao(int numVitorias, int numDerrotas) {
    return numVitorias - numDerrotas;
}


int main() {
    char keyPressed;
    int numVitorias, numDerrotas, resVD;
    do {
    std::cout << "Quantidades de vitorias:\n";
    std::cin >> numVitorias; 

    std::cout << "Quantidades de derrotas:\n";
    std::cin >> numDerrotas;

    resVD = subtracao(numVitorias, numDerrotas);

    if (resVD < 10)
    {
        std::cout << "O herói tem saldo de: " << resVD << " atingindo nivel: Ferro\n";
    } else if (resVD > 10 && resVD <= 20)
    {
        std::cout << "O herói tem saldo de: " << resVD << " atingindo nivel: Bronze\n";
    } else if (resVD > 20 && resVD <= 50)
    {
        std::cout << "O herói tem saldo de: " << resVD << " atingindo nivel: Bronze\n";
    } else if (resVD > 50 && resVD <= 80)
    {
        std::cout << "O herói tem saldo de: " << resVD << " atingindo nivel: Ouro\n";
    } else if (resVD > 80 && resVD <= 90)
    {
        std::cout << "O herói tem saldo de: " << resVD << " atingindo nivel: Diamante\n";
    } else if (resVD > 90 && resVD <= 100)
    {
        std::cout << "O herói tem saldo de: " << resVD << " atingindo nivel: Lendario\n";
    } else
    {
        std::cout << "O herói tem saldo de: " << resVD << " atingindo nivel: Imortal\n";
    }
    
    std::cout << "Deseja repetir o processo? (y/n):\n";
    std::cin >> keyPressed;

    } while (keyPressed == 'y');

}