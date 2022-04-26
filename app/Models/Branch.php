<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Branch extends Authenticatable
{
    use HasFactory;

    protected $fillable = [
      'name', 'address', 'phone', 'email', 'password'
    ];
}
