<?php

namespace App\Models;

use TCG\Voyager\Models\Category;
use TCG\Voyager\Models\Page as ModelsPage;

class Page extends ModelsPage
{
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
