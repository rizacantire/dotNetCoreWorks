using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace TestScreenConsole
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //var ss = "abc";

            //var l = ss.Length;
            //var list = new ArrayList();
            //int count = 0;
            //for(int i = 0; i < l; i++)
            //{
            //    if (list.Contains(ss[i]))
            //    {
            //        count++;
            //    }
            //    else
            //    {
            //        list.Add(ss[i]);
            //    }

            //}

            //foreach(var i in list)
            //{
            //    Console.WriteLine(i);
            //}

            List<List<int>> liste = new List<List<int>>();
            var lll = new List<int>();
            lll.Add(1);
            lll.Add(2);
            liste.Add(lll);
            var ab =2;
     
            Console.WriteLine(liste[1,5]);
            
           

        }
    }
}
