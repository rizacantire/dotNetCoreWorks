﻿using Domain.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Commentator : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
