<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Category;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilePageController extends Controller
{
    public function __invoke(Request $request, $slug)
    {
        return Inertia::render('ProfilePage', [
            'page' => Page::query()->where('slug', $slug)->first(),
            'posts' => Post::query()->whereHas('category', function($query) use ($slug) {
                $query->where('category_id', Category::query()->where('slug', $slug)->first()->id);
            })->get()
        ]);
    }
}
