<?php

namespace App\Models;

use TCG\Voyager\Models\Category;
use TCG\Voyager\Models\Post as ModelsPost;

class Post extends ModelsPost
{
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
