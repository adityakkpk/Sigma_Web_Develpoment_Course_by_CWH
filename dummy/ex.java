import java.util.ArrayList;

class ex {
    public static void main(String[] args) {    
       printSome(20, 5);
 
    
    }
     static void printSome( int num1, int num2)
{
for ( int i = 0; i < num1; i++)
{
if ( i % num2 == 0 && i % 2 == 0)
{
System.out .print ( i + " ") ;
}
}
}
}